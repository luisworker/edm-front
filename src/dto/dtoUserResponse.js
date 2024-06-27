export const dtoUserResponse = (user) => {
    return {
        codUser : user.codUser,
        descVendor : user.descVendor,
        firstConnection : user.firstConnection,
        idVendor : user.idVendor,
        userAdmin : user.userAdmin
    };
}
