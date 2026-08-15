function FindProxyForURL(url, host) {
    // Force all traffic to route through your secure HTTPS Stunnel proxy
    return "HTTPS services.homelab-ap.xyz:443";
}
