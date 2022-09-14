import routeGuard from 'utils/route-guard';

export default function Admin() {
    return (
        <div>Admin</div>
    );
}

export const getServerSideProps = routeGuard();