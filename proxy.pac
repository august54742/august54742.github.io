function FindProxyForURL(url, host) {
    // Try Port 443 first. If it fails or deadlocks, instantly fall back to 8443.
    return "HTTPS services.homelab-ap.xyz:443; HTTPS services.homelab-ap.xyz:8443";
}
