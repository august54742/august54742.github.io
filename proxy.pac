function FindProxyForURL(url, host) {
    // Rely exclusively on custom high-level ports to bypass iOS deadlocks
    return "HTTPS services.homelab-ap.xyz:8443; HTTPS services.homelab-ap.xyz:8080";
}
