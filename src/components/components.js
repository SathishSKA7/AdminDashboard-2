import "./style.css";

const Components = () => {
  return (
    <div class="container-fluid">
      <h1 class="h3 mb-4 text-gray-800">Buttons</h1>
      <p>
        Bootstrap includes several predefined button styles, each serving its
        own semantic purpose, with a few extras thrown in for more control.
      </p>
      <p>
        The .btn classes are designed to be used with the button element.
        However, you can also use these classes on a tag or input elements
        (though some browsers may apply a slightly different rendering). When
        using button classes on a tag elements that are used to trigger in-page
        functionality (like collapsing content), rather than linking to new
        pages or sections within the current page, these links should be given a
        role="button" to appropriately convey their purpose to assistive
        technologies such as screen readers.
      </p>

      <div class="row ">
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Circle Buttons</h6>
            </div>
            <div class="card-body">
              <p>
                Use Font Awesome Icons (included with this theme package) along
                with the circle buttons as shown in the examples below!
              </p>

              <div class="mb-2">
                <code>.btn-circle</code>
              </div>
              <a href="#" class="btn btn-primary btn-circle">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="btn btn-success btn-circle">
                <i class="fas fa-check"></i>
              </a>
              <a href="#" class="btn btn-info btn-circle">
                <i class="fas fa-info-circle"></i>
              </a>
              <a href="#" class="btn btn-warning btn-circle">
                <i class="fas fa-exclamation-triangle"></i>
              </a>
              <a href="#" class="btn btn-danger btn-circle">
                <i class="fas fa-trash"></i>
              </a>

              <div class="mt-4 mb-2">
                <code>.btn-circle .btn-sm</code>
              </div>
              <a href="#" class="btn btn-primary btn-circle btn-sm">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="btn btn-success btn-circle btn-sm">
                <i class="fas fa-check"></i>
              </a>
              <a href="#" class="btn btn-info btn-circle btn-sm">
                <i class="fas fa-info-circle"></i>
              </a>
              <a href="#" class="btn btn-warning btn-circle btn-sm">
                <i class="fas fa-exclamation-triangle"></i>
              </a>
              <a href="#" class="btn btn-danger btn-circle btn-sm">
                <i class="fas fa-trash"></i>
              </a>

              <div class="mt-4 mb-2">
                <code>.btn-circle .btn-lg</code>
              </div>
              <a href="#" class="btn btn-primary btn-circle btn-lg">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="btn btn-success btn-circle btn-lg">
                <i class="fas fa-check"></i>
              </a>
              <a href="#" class="btn btn-info btn-circle btn-lg">
                <i class="fas fa-info-circle"></i>
              </a>
              <a href="#" class="btn btn-warning btn-circle btn-lg">
                <i class="fas fa-exclamation-triangle"></i>
              </a>
              <a href="#" class="btn btn-danger btn-circle btn-lg">
                <i class="fas fa-trash"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">
                Split Buttons with Icon
              </h6>
            </div>
            <div class="card-body">
              <p>
                Works with any button colors, just use the{" "}
                <code>.btn-icon-split</code> class and the markup in the
                examples below. The examples below also use the
                <code>.text-white-50</code> helper class on the icons for
                additional styling, but it is not required.
              </p>
              <a href="#" class="btn btn-primary btn-icon-split">
                <span class="icon text-white-50">
                  <i class="fas fa-flag"></i>
                </span>
                <span class="text">Split Button Primary</span>
              </a>
              <div class="my-2"></div>
              <a href="#" class="btn btn-success btn-icon-split">
                <span class="icon text-white-50">
                  <i class="fas fa-check"></i>
                </span>
                <span class="text">Split Button Success</span>
              </a>
              <div class="my-2"></div>
              <a href="#" class="btn btn-info btn-icon-split">
                <span class="icon text-white-50">
                  <i class="fas fa-info-circle"></i>
                </span>
                <span class="text">Split Button Info</span>
              </a>
              <div class="my-2"></div>
              <a href="#" class="btn btn-warning btn-icon-split">
                <span class="icon text-white-50">
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
                <span class="text">Split Button Warning</span>
              </a>
              <div class="my-2"></div>
              <a href="#" class="btn btn-danger btn-icon-split">
                <span class="icon text-white-50">
                  <i class="fas fa-trash"></i>
                </span>
                <span class="text">Split Button Danger</span>
              </a>

              <div class="my-2"></div>
              <a href="#" class="btn btn-secondary btn-icon-split">
                <span class="icon text-white-50">
                  <i class="fas fa-arrow-right"></i>
                </span>
                <span class="text">Split Button Secondary</span>
              </a>
              <div class="my-2"></div>
              <a href="#" class="btn btn-light btn-icon-split">
                <span class="icon text-gray-600">
                  <i class="fas fa-arrow-right"></i>
                </span>
                <span class="text">Split Button Light</span>
              </a>
              <div class="mb-4"></div>
              <p>Also works with small and large button classes!</p>
              <a href="#" class="btn btn-primary btn-icon-split btn-sm">
                <span class="icon text-white-50">
                  <i class="fas fa-flag"></i>
                </span>
                <span class="text">Split Button Small</span>
              </a>
              <div class="my-2"></div>
              <a href="#" class="btn btn-primary btn-icon-split btn-lg">
                <span class="icon text-white-50">
                  <i class="fas fa-flag"></i>
                </span>
                <span class="text">Split Button Large</span>
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Brand Buttons</h6>
            </div>
            <div class="card-body">
              <p>
                Google and Facebook buttons are available featuring each
                company's respective brand color. They are used on the user
                login and registration pages.
              </p>
              <p>
                You can create more custom buttons by adding a new color
                variable in the
                <code>_variables.scss</code> file and then using the Bootstrap
                button variant mixin to create a new style, as demonstrated in
                the <code>_buttons.scss</code>
                file.
              </p>
              <a href="#" class="btn btn-google btn-block">
                <i class="fab fa-google fa-fw"></i>
                .btn-google
              </a>
              <a href="#" class="btn btn-facebook btn-block">
                <i class="fab fa-facebook-f fa-fw"></i> .btn-facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-0 text-gray-800">Cards</h1>
        </div>

        <p>
          A card is a flexible and extensible content container. It includes
          options for headers and footers, a wide variety of content, contextual
          background colors, and powerful display options. If you’re familiar
          with Bootstrap 3, cards replace our old panels, wells, and thumbnails.
          Similar functionality to those components is available as modifier
          classes for cards.
        </p>

        <div class="row">
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Earnings (Monthly)
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                      $40,000
                    </div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-calendar fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-success shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                      Earnings (Annual)
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                      $215,000
                    </div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-info shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-info text-uppercase mb-1">
                      Tasks
                    </div>
                    <div class="row no-gutters align-items-center">
                      <div class="col-auto">
                        <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                          50%
                        </div>
                      </div>
                      <div class="col">
                        <div class="progress progress-sm mr-2">
                          <div
                            class="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: "50%" }}
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-warning shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                      Pending Requests
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">18</div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-comments fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <div class="card mb-4">
              <div class="card-header">Default Card Example</div>
              <div class="card-body">
                This card uses Bootstrap's default styling with no utility
                classes added. Global styles are the only things modifying the
                look and feel of this default card example.
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">
                  Basic Card Example
                </h6>
              </div>
              <div class="card-body">
                The styling for this basic card example is created by using
                default Bootstrap utility classes. By using utility classes, the
                style of the card component can be easily modified with no need
                for any custom CSS!
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <div class="card shadow mb-4">
              <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-primary">
                  Dropdown Card Example
                </h6>
                <div class="dropdown no-arrow">
                  <a
                    class="dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <div class="dropdown-header">Dropdown Header:</div>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </div>
              </div>

              <div class="card-body">
                Dropdown menus can be placed in the card header in order to
                extend the functionality of a basic card. In this dropdown card
                example, the Font Awesome vertical ellipsis icon in the card
                header can be clicked on in order to toggle a dropdown menu.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Components;
