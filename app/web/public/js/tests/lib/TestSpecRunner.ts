module POSE.Tests {
    export class TestSpecRunner {

        name: string;
        tests = [];

        constructor(name: string) {
            this.name = name;
        }


        public register(testName, specRunner: TestSpecRunner);

        public register(testName, specRunner: () => void);

        public register(testName, specRunner: any) {

            if (specRunner.run) {

                this.tests.push(() => specRunner.run());

                return;
            }

            this.tests.push(specRunner);
        }

        public run() {
            describe(this.name, function () {
                for (var i = 0; i < this.tests.length; i++) {
                    this.tests[i]();
                }
            });
        }
    }

    export var TestSpecRunners = [];
}