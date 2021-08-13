
export interface ClientRepresentation {
    clientId: string;
    name?: string;
    description?: string;
    secret: string;
    enabled: boolean;
    alwaysDisplayInConsole: boolean;
    consentRequired: boolean;
    bearerOnly: boolean; //access Type
    publicClient: boolean; //access Type
    standardFlowEnabled: boolean;
    implicitFlowEnabled: boolean;
    directAccessGrantsEnabled: boolean;
    serviceAccountsEnabled: boolean;
    rootUrl?: string;
    redirectUris: string[];
    baseUrl?: string;
    adminUrl?: string;
    webOrigins?: string[];

    defaultClientScopes: string[];
    optionalClientScopes: string[];

    attributes: {
        "backchannel.logout.url"?: string;
        "backchannel.logout.session.required"?: string;
        "backchannel.logout.revoke.offline.tokens"?: string;
        "oauth2.device.authorization.grant.enabled"?: string;

        "access.token.lifespan"?: string;
        "client.session.idle.timeout"?: string;
        "client.session.max.lifespan"?: string;
        "client.offline.session.idle.timeout"?: string;
        "client.offline.session.max.lifespan"?: string;
        "tls.client.certificate.bound.access.tokens"?: string;
        "pkce.code.challenge.method"?: string;
        "use.refresh.tokens"?: string;
        "client_credentials.use_refresh_token"?: string;
        "exclude.session.state.from.auth.response"?: string;
    }

}