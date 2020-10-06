import { convertParamsToQueryString } from "./endpoint.utils";

describe("convertParamsToQueryString", () => {
  it("should return an empty string when the params are empty", () => {
    expect(
      convertParamsToQueryString({
        search: "",
        update: ""
      })
    ).toBe("");
  });

  it("should return a value for update and prepend it with a ?", () => {
    expect(
      convertParamsToQueryString({
        update: "test",
        search: ""
      })
    ).toBe("?update=test");
  });

  it("should return a value for both update and search and separate them with an ampersand", () => {
    expect(
      convertParamsToQueryString({
        update: "test",
        search: "test2"
      })
    ).toBe(`?update=test&search=test2`);
  });

  it("should render the second value if the first is an empty string", () => {
    expect(
      convertParamsToQueryString({
        update: "test",
        search: ""
      })
    ).toBe("?update=test");
  });

  it("should always be prepended with a question mark", () => {
    expect(
      convertParamsToQueryString({
        update: "test2",
        search: ""
      })
    ).toBe("?update=test2");
  });
});
