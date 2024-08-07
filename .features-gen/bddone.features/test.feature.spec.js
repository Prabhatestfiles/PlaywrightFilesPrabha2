/** Generated from: bddone.features\test.feature */
import { test } from "../../bdd.steps/fixtures/fixtures.ts";

test.describe("loginpage", () => {

  test("To Login the dynamic app", { tag: ["@smoke"] }, async ({ Then, Login }) => {
    await Then("Login", null, { Login });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("bddone.features\\test.feature"),
});

const testMetaMap = {
  "To Login the dynamic app": {"pickleLocation":"3:5","tags":["@smoke"]},
};