"""
FolioForge Local Development & Verification Server
Runs a lightweight, zero-dependency HTTP server for the FolioForge Community Clone.
"""
import http.server
import socketserver
import sys
import os
import threading
import time
import urllib.request

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Cache control for live local development
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def run_test():
    """Start server in background thread, verify HTTP 200 and FolioForge contents, then stop."""
    print("Testing FolioForge HTTP server...")
    test_port = 8899
    
    server = None
    for p in range(8899, 8910):
        try:
            server = socketserver.TCPServer(("", p), Handler)
            test_port = p
            break
        except OSError:
            continue

    if not server:
        print("Error: Could not bind to any test port.")
        sys.exit(1)

    t = threading.Thread(target=server.serve_forever, daemon=True)
    t.start()
    time.sleep(0.5)

    test_url = f"http://localhost:{test_port}/"
    try:
        req = urllib.request.Request(test_url)
        with urllib.request.urlopen(req, timeout=5) as response:
            status = response.status
            content = response.read().decode('utf-8')
            
            assert status == 200, f"Expected status 200, got {status}"
            assert "FolioForge" in content, "Brand FolioForge not found in index.html response"
            assert "Portfolio" in content, "Portfolio header not found"
            assert "app.js" in content, "app.js reference missing"
            assert "styles.css" in content, "styles.css reference missing"
            
            print(f"[PASSED] Verification successful! Server returned HTTP 200 OK.")
            print(f"[PASSED] FolioForge branding and community templates verified.")
    except Exception as e:
        print(f"[FAILED] Error during verification: {e}")
        server.shutdown()
        sys.exit(1)
    finally:
        server.shutdown()
        print("Test server shutdown completed.")

def start_server():
    port = PORT
    httpd = None
    for p in [8080, 8000, 3000, 5000, 8888]:
        try:
            httpd = socketserver.TCPServer(("", p), Handler)
            port = p
            break
        except OSError:
            continue

    if not httpd:
        print("Error: Could not bind server to available ports.")
        sys.exit(1)

    print(f"==================================================")
    print(f"  FolioForge Community Portfolio Templates Clone   ")
    print(f"==================================================")
    print(f"  Local URL:  http://localhost:{port}/")
    print(f"  Directory:  {DIRECTORY}")
    print(f"  Serving:    index.html, styles.css, app.js")
    print(f"  Press Ctrl+C to terminate the server.")
    print(f"==================================================")
    
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer terminated by user.")
        httpd.server_close()

if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "--test":
        run_test()
    else:
        start_server()
