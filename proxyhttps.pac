function FindProxyForURL(url, host) {
    // Route traffic securely through Apache on port 443
    return "HTTPS services.homelab-ap.xyz:443";
}
