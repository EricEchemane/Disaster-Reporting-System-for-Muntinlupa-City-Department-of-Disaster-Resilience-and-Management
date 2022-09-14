import { GetServerSidePropsContext, PreviewData } from "next";
import { useCookie } from "next-cookie";
import { ParsedUrlQuery } from "querystring";

export default function routeGuard() {
    return async (context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const cookie = useCookie(context);
        const loginCredentials = cookie.get('disaster');

        if (!loginCredentials) {
            return {
                redirect: {
                    destination: '/',
                    permanent: false
                }
            };
        }

        return { props: {} };
    };
}