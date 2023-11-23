import * as signalR from "@microsoft/signalr";
// import 'dotenv/config';

class SignalRService {
    constructor() {
        this.connection = new signalR.HubConnectionBuilder()
            .withUrl("http://localhost:5030/hub/device-data", {
                skipNegotiation: true,
                transport: signalR.HttpTransportType.WebSockets
            }) 
            .build(); 

        // Các sự kiện xử lý khi kết nối được thiết lập
        this.connection.on("ConnectedMessage", (data) => {
            console.log("Received data:", data);
        });

        this.startConnection();
    }

    startConnection = async () => {
        try {
            await this.connection.start();
            console.log("SignalR connected!");
        } 
        catch (err) {
            console.error("Error connecting to SignalR:", err);
        }
    };

    sendTestMessage = async (message) => {
        try {
            await this.connection.invoke("SendTestMess", message);
        } 
        catch (err) {
            console.error("Error sending test message:", err);
        }
    };
}

const signalRService = new SignalRService();

signalRService.connection.on("ServerSendTestMessage", (serverResponse) => {
    // Xử lý phản hồi từ server
    console.log(serverResponse);
});
export default signalRService;
