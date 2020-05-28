import { UserInfoApi } from "./userInfo.datasource";

export const createDataSources = () => ({
  userInfoApi: new UserInfoApi(),
});
