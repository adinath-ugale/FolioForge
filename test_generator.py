import json
import re
import subprocess
import os

# Let's inspect templateGenerator.js by running node or python
def main():
    print("Testing template generator...")
    # Check if node is available or parse in python
    try:
        res = subprocess.run(["node", "-e", """
            const gen = require('./templateGenerator.js');
            const batch = gen.generateSeedBatch();
            console.log(JSON.stringify({
                count: batch.length,
                categories: Object.keys(gen.CATEGORY_PROFILES).length,
                styles: Object.keys(gen.STYLE_PROFILES).length,
                sample: batch[0],
                allIds: batch.map(b => b.id),
                descriptions: batch.map(b => b.description),
                categoriesRepresented: [...new Set(batch.map(b => b.category))],
                stylesRepresented: [...new Set(batch.map(b => b.style))]
            }));
        """], capture_output=True, text=True, cwd=r"C:\Users\Aadi\.gemini\antigravity\scratch\folioforge")
        if res.returncode == 0:
            data = json.loads(res.stdout)
            print(f"Node execution successful!")
            print(f"Total generated seed templates: {data['count']}")
            print(f"Categories defined: {data['categories']}")
            print(f"Styles defined: {data['styles']}")
            print(f"Categories in seed batch: {len(data['categoriesRepresented'])}")
            print(f"Styles in seed batch: {len(data['stylesRepresented'])}")
            print(f"Unique descriptions count: {len(set(data['descriptions']))}")
            print("\nSample template:")
            print(f"ID: {data['sample']['id']}")
            print(f"Title: {data['sample']['title']}")
            print(f"Category: {data['sample']['category']}")
            print(f"Style: {data['sample']['style']}")
            print(f"Price: Rs. {data['sample']['originalPrice']} ({data['sample']['discount']}% OFF)")
            print(f"Description:\n{data['sample']['description']}")
        else:
            print("Node stderr:", res.stderr)
    except Exception as e:
        print("Error running node test:", e)

if __name__ == "__main__":
    main()
