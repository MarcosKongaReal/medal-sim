from http.server import BaseHTTPRequestHandler, HTTPServer
import json

class RequestHandler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        
        with open('medals.json', 'w', encoding='utf-8') as f:
            f.write(post_data.decode('utf-8'))
            
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(b'Success')
        print("Data received and saved to medals.json")

def run():
    server_address = ('', 8080)
    httpd = HTTPServer(server_address, RequestHandler)
    print('Starting server on port 8080...')
    httpd.handle_request() # Handle exactly one request and then exit

if __name__ == '__main__':
    run()
