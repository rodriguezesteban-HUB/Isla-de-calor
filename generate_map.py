import geopandas as gpd
import matplotlib.pyplot as plt
import os

# Load the geojson
path = 'GEOJSON_Milan_Districts.geojson'
gdf = gpd.read_file(path)

# Ensure it is in a readable projection for alignment (WGS84)
gdf = gdf.to_crs(epsg=4326)

# Set up the plot
fig, ax = plt.subplots(figsize=(10, 10))

# Custom styling for the dashboard
fig.patch.set_facecolor('#0d140d') # Matches --bg
ax.set_facecolor('#0d140d')

# Plot boundaries with subtle green glow style
gdf.boundary.plot(ax=ax, color='#4ade80', linewidth=0.8, alpha=0.6)
# Small fill to define neighborhoods better
gdf.plot(ax=ax, color='#162416', alpha=0.3)

# Remove axes and padding to allow perfect overlay
ax.axis('off')
plt.subplots_adjust(top=1, bottom=0, right=1, left=0, hspace=0, wspace=0)
plt.margins(0,0)
ax.xaxis.set_major_locator(plt.NullLocator())
ax.yaxis.set_major_locator(plt.NullLocator())

# Save matching the size and alignment used in the dashboard
plt.savefig('milan_map.png', dpi=300, bbox_inches='tight', pad_inches=0, transparent=True)
print("Map generated from GeoJSON successfully.")
