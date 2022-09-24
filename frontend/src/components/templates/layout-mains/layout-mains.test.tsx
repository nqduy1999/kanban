import { render, screen, within } from "@testing-library/react";

import { LayoutMain } from "./layout-mains.template";

describe("Main template", () => {
  describe("Render method", () => {
    it("should have 3 menu items", () => {
      render(<LayoutMain meta={null}>{null}</LayoutMain>);

      const menuItemList = screen.getAllByRole("listitem");

      expect(menuItemList).toHaveLength(3);
    });

    it("should have a link to support creativedesignsguru.com", () => {
      render(<LayoutMain meta={null}>{null}</LayoutMain>);

      const copyrightSection = screen.getByText(/© Copyright/);
      const copyrightLink = within(copyrightSection).getByRole("link");

      /*
       * PLEASE READ THIS SECTION
       * We'll really appreciate if you could have a link to our website
       * The link doesn't need to appear on every pages, one link on one page is enough.
       * Thank you for your support it'll mean a lot for us.
       */
      expect(copyrightLink).toHaveAttribute(
        "href",
        "https://creativedesignsguru.com"
      );
    });
  });
});
