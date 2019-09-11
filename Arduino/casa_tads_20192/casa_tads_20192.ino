#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>

//wi-fi e autenticação no Firebase
#define FIREBASE_HOST "arduino-project-4ded3.firebaseio.com"
#define FIREBASE_AUTH "dmL0P0m3GbspkFEqdIS3dKDlrSZoJCxaF3EH6mQX"
#define WIFI_SSID "ifdoce"
#define WIFI_PASSWORD "10tifsul"

//mapeamento de portas
#define LED_AZUL 2
#define LED_VERMELHO 16

void autenticarFirebase(){
  //autentica e inicializa o serviço de Realtimedatabase do Firebase
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
}

void conectarWiFi(){
  //conecta com o wifi
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("\nconnecting");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("connected: ");
  Serial.println(WiFi.localIP());
  autenticarFirebase();
}

void setup() {
  //inicializa a comunicação serial com o monitor da IDE
  Serial.begin(9600);
  
  pinMode(LED_AZUL, OUTPUT); //led buit in azul
  pinMode(LED_VERMELHO, OUTPUT); //led buit in vermelho 

  conectarWiFi();
  
}

void loop() {
  if(WiFi.status() == WL_CONNECTED){
    if (Firebase.success()) {
      FirebaseObject casa = Firebase.get("home");
      if(casa.getBool("/livingRoom/lamp")){
        digitalWrite(LED_AZUL, LOW);
        Serial.println("Lampada ligada - led azul");
      } else{
        digitalWrite(LED_AZUL, HIGH);
        Serial.println("Lampada desligada - led azul");
      }

      if(casa.getBool("/onboard/ledVermelho")){
        digitalWrite(LED_VERMELHO, LOW);
        Serial.println("Televisão ligada - led vermelho");
      } else{
        digitalWrite(LED_VERMELHO, HIGH);
        Serial.println("Televisão desligada - led vermelho");
      }
      
    } else{
      Serial.println("Erro na autenticão com o Firebase");
    }
  } else{
    conectarWiFi();
  }
  
  delay(500);
}
