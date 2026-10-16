# Transparent browser favicon

- Built-in imagegen edit of the original `public/images/logo/E_logo.jpeg`.
- Selected source: `src/assets/epart-favicon-transparent-source.png`.
- Exports: `public/icons/favicon-transparent.png` (64px) and `public/icons/favicon.png` (32px).
- Run `python scripts/prepare-favicon.py` to resize the source with its alpha preserved.
- Browser HTML references the new filename so the previous white favicon is not reused from cache.

## Final prompt

Use case: background-extraction. Edit target: original Epart E symbol supplied on white. Remove the white background completely, including negative spaces inside and between strokes. Output exactly this original orange/gold E symbol centered on a square canvas with a small transparent margin. Preserve its original silhouette, proportions and orange/gold shading precisely. Produce clean smooth antialiased edges, with absolutely no speckles, detached pixels, noise, white fringe or stray color outside the E silhouette. All areas outside the exact clean logo silhouette must have alpha zero. Preserve the two flowing sections that together form the E. No redesign, no text, no shadow, no backdrop, no new shape. Actual transparent alpha PNG.
