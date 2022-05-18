const { Role } = require("@prisma/client");

const users = [
  {
    first_name: "admin",
    last_name: "admin",
    address_1: "NA",
    city: "NA",
    postal_code: "NA",
    country: "NA",
    telephone: "NA",
    email: "NA",
    role: Role.ADMIN,
  },
  {
    first_name: "Trev",
    last_name: "Estick",
    address_1: "989 Vidon Place",
    city: "Roberval",
    postal_code: "G8H BVF",
    country: "Canada",
    telephone: "704-513-4852",
    email: "testick1@theguardian.com",
    role: Role.USER,
  },
];

module.exports = {
  users,
};
