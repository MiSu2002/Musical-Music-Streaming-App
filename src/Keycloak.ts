import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    url: "http://localhost:8080/",
    realm: "Musical",
    clientId: "musical",
});

export default keycloak;