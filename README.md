# ResProd previews

Public GitHub Pages host for client site mockups, served at
[preview.resprodclearview.app](https://preview.resprodclearview.app/).

The root page does not list clients. Each site lives at `/<slug>/`.
Pages are noindexed, and `robots.txt` disallows crawlers.

## Publish a site

From a clean copy of the site repo (never publish `screenshots/`, `incoming/`, `README.md`, or `.git`):

```sh
git -C /workspace/resprod-previews pull --ff-only
rm -rf /workspace/resprod-previews/<slug>
mkdir /workspace/resprod-previews/<slug>
# copy only the site files, e.g. index.html, styles.css, images, fonts, css, js
cp -r /workspace/<slug>/{index.html,styles.css,images,fonts,css,js} \
  /workspace/resprod-previews/<slug>/ 2>/dev/null || true
# include any other public site files or pages the site actually uses
cd /workspace/resprod-previews
git add <slug>
git -c user.name=sreslol -c user.email=sreslol@users.noreply.github.com \
  commit -m "Add <Business> mockup preview (noindex)"
git push origin main
```

Do not change `CNAME`, `robots.txt`, or the root `index.html`.
After a minute, verify `https://preview.resprodclearview.app/<slug>/`.
A hard refresh may be needed.

Repo: https://github.com/sreslol/resprod-previews

## Teardown (temporary)
When previews stop using this domain: delete the Cloudflare DNS record `preview` CNAME -> sreslol.github.io (zone resprodclearview.app, record id 72e1ccedd4a29b2c5d0d14a91603e8d7), and clear the custom domain in this repo's Pages settings.
