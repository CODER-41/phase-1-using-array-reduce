const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
//sum all, batteries
const totalBatteries = batteryBatches.reduce((sum, batch) => sum + batch, 0);
//expose it globally so the test can see it
if (typeof window !== 'undefined') {
    window.totalBatteries = totalBatteries;

}else {
    global.totalBatteries = totalBatteries;
}