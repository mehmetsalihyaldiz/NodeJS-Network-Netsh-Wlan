import { exec } from 'child_process';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('SSID adını giriniz:', function (ssid_name) {
    rl.question('SSID şifreni giriniz:', function (ssid_password) {
        exec(`netsh wlan set hostednetwork ssid=${ssid_name} key=${ssid_password}`, (err, stdout, stderr) => {
            if (err) {
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
        })
        console.log(`${ssid_name} adlı hotspot ağı bağlanıldı.`);
        rl.close();
    });
});

rl.on('close', function () {
    console.log('\nBYE BYE !!!');
    process.exit(0);
});