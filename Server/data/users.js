import bcrypt from "bcryptjs"

const users = [
    {
        name: "Admin",
        email: "hotboy7102@gmail.com",
        //hash mật khẩu
        password: bcrypt.hashSync("admin123", 14),
        isAdmin: true,
    },
    {
        name: "admin",
        email: "admin@gmail.com",
        //hash mật khẩu
        password: bcrypt.hashSync("admin", 14),
        isAdmin: true,
    },
    {
        name: "user",
        email: "user@gmail.com",
        //hash mật khẩu
        password: bcrypt.hashSync("123456", 14),
    },
];

export default users;
