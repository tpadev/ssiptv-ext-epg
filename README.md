# ssiptv-ext-epg
This guide is to setup external epg for SS IPTV application on webOS LG TV

After many hours of searching and read all the ssiptv forum about external epg
finally found a way to make it works using workers.dev as proxy to epg.

1. Make sure your m3u playlist start with this #EXTM3U x-tvg-url="EPG_url"
   see https://ss-iptv.com/en/operators/epg
2. Create account at cloudfare.com and setup workers
3. Paste epg.js to your new workers
