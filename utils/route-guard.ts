import { getCookie } from "cookies-next";
import connectToDatabase from "db/db-connector";
import { GetServerSidePropsContext, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";

export interface ICookie {
    type: "brgy" | "admin";
    _id: string;
}

export default function routeGuard() {
    return async ({ req, res }: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) => {

        const loginCredentials: any = getCookie("disaster", { req, res });

        if (!loginCredentials) return {
            redirect: {
                destination: '/',
                permanent: false
            }
        };

        const db = await connectToDatabase();
        const { Barangay } = db.models;

        if (loginCredentials.type === 'brgy') {
            const brgy = await Barangay.findById(loginCredentials._id).populate("reportedIncidents");
            if (!brgy) return {
                redirect: {
                    destination: '/',
                    permanent: false
                }
            };
            return {
                props: { data: brgy }
            };
        }
        else if (loginCredentials.type === 'admin') {
            const brgys = await Barangay.find().populate("reportedIncidents");
            return { props: { data: brgys } };
        }

        return { props: {} };
    };
}