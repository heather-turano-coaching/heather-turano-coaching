import { AdminPage } from "@htc/features/admin";
import { withPage, withSSRAuthentication } from "@htc/features/page";

export default withPage(AdminPage);

export const getServerSideProps = withSSRAuthentication();
