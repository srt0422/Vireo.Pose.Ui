var POSE;
(function (POSE) {
    var Tests;
    (function (Tests) {
        class TestSpecRunner {
            constructor(name) {
                this.tests = [];
                this.name = name;
            }
            register(testName, specRunner) {
                if (specRunner.run) {
                    this.tests.push(() => specRunner.run());
                    return;
                }
                this.tests.push(specRunner);
            }
            run() {
                describe(this.name, function () {
                    for (var i = 0; i < this.tests.length; i++) {
                        this.tests[i]();
                    }
                });
            }
        }
        Tests.TestSpecRunner = TestSpecRunner;
        Tests.TestSpecRunners = [];
    })(Tests = POSE.Tests || (POSE.Tests = {}));
})(POSE || (POSE = {}));
