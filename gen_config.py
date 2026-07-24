import base64

# Read image
with open(r'C:\Users\Asus\Documents\anhapp1h2.png', 'rb') as f:
    img_data = f.read()
    b64 = base64.b64encode(img_data).decode('utf-8')

# Format XML
xml = f'''<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>PayloadContent</key>
    <array>
        <dict>
            <key>FullScreen</key>
            <true/>
            <key>Icon</key>
            <data>
{b64}
            </data>
            <key>IsRemovable</key>
            <true/>
            <key>Label</key>
            <string>Migul Lite</string>
            <key>PayloadDescription</key>
            <string>Adds Migul Lite to the Home Screen</string>
            <key>PayloadDisplayName</key>
            <string>Web Clip</string>
            <key>PayloadIdentifier</key>
            <string>com.apple.webClip.managed.D3F2B3C4-1234</string>
            <key>PayloadType</key>
            <string>com.apple.webClip.managed</string>
            <key>PayloadUUID</key>
            <string>D3F2B3C4-1234</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
            <key>Precomposed</key>
            <true/>
            <key>URL</key>
            <string>https://your-github-username.github.io/MigulLiteWeb/</string>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>Migul Lite Configuration</string>
    <key>PayloadIdentifier</key>
    <string>com.migul.lite</string>
    <key>PayloadRemovalDisallowed</key>
    <false/>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>A1B2C3D4-5678</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
'''

with open(r'C:\Users\Asus\.gemini\antigravity\scratch\MigulLiteWeb\migul_lite.mobileconfig', 'w', encoding='utf-8') as f:
    f.write(xml)

print('Mobileconfig generated successfully.')
