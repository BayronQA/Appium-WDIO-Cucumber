class AlertPage {
    public get messageAlert() {
        return $('//*[@resource-id="android:id/message"]');
    }
}

export default new AlertPage();