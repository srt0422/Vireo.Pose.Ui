declare module POSE.Tests {
    class TestSpecRunner {
        name: string;
        tests: any[];
        constructor(name: string);
        register(testName: any, specRunner: TestSpecRunner): any;
        register(testName: any, specRunner: () => void): any;
        run(): void;
    }
    var TestSpecRunners: any[];
}
