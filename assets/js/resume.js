var resumeApp = angular.module('resumeApp', []);
resumeApp.factory('Resume', function () {
  var Resume = {
    "title" : "Joe's Resume",
    "name" : "Joe Ekiert",
    "email" : "joe.ekiert@gmail.com",
    "website" : "http://ekiert.net/",
    "street_address" : "",
    "city" : "San Francisco",
    "state" : "",
    "zip" : "",
    "phone" : "978.375.5916",
    "technical_experience" : [
      {
        "title" : "Primary",
        "items" : ["JavaScript","PHP", "Ruby", "HTML5", "CSS", "git"]
      },
      {
        "title" : "Secondary",
        "items" : ["*nix", "Chef + opscode", "AWS"]
      },
      {
        "title" : "Storage",
        "items" : ["MySQL", "Solr", "Memcached"]
      },
      {
        "title" : "Frameworks",
        "items" : ["Express.js", "Node.js", "Backbone.js", "Ruby on Rails", "CodeIgniter"]
      },
      {
        "title" : "Passive",
        "items" : ["Strong ability to understand and learn unknown syntax through documentation.  When in range, +25 to group morale."]
      }
    ],
    "weapons_of_choice" : [
      {
        "title" : "Web Development",
        "items" : ["Sublime Text 2", "Virtual Box for compatibility testing", "Custom MAMP", "SequelPro", "ForkLift"]
      },
      {
        "title" : "iOS Development",
        "items" : ["Xcode"]
      },
      {
        "title" : "Quick Edits",
        "items" : ["TextMate", "ForkLift"]
      },
      {
        "title" : "Versioning",
        "items" : ["git via Tower Client"]
      }
    ],
    "relevant_experience" : [
      {
        "company_name" : "72Lux",
        "company_role" : "Founding Member/Engineer",
        "date_start" : "December 2011",
        "date_end" : "Present",
        "responsibilities" : [
          {
            "title" : "untitled",
            "order" : 1,
            "description" : "Played a heavy role in building the JavaScript code from which product frames are rendered.  Major hurdles were reducing collisions with existing customer assets, maintaining a small file size, cross-compatibility and organization.  The tech stack utilized was grunt for compiling, yepnope for asynchronous asset loading, and dust templates for views.  This enabled the entire necessary code to exist in a single shop.js file."
          },
          {
            "title" : "untitled",
            "order" : 2,
            "description" : "Broke ground for the initial part of our platform: Shoppable Dashboard utilizing CodeIgniter."
          },
          {
            "title" : "untitled",
            "order" : 3,
            "description" : "Plays a customer support role for publishers trying to get Shoppable up and running."
          },
          {
            "title" : "untitled",
            "order" : 4,
            "description" : "Part of the team that built the Shoppable login portal for Merchants utilizing Ruby on Rails."
          },
          {
            "title" : "untitled",
            "order" : 5,
            "description" : "Design and construction of checkout views (initially via PHP then reconstructed in Ruby on Rails):  for enterprise users via rendering inside an iframe as well as self-serve where users are redirected to a 72Lux hosted checkout."
          },
          {
            "title" : "untitled",
            "order" : 6,
            "description" : "Whole lotta browser-compatibility testing: Desktop browsers, mobile browsers, tablets, different operating systems, etc..."
          },
          {
            "title" : "untitled",
            "order" : 7,
            "description" : "After losing the first CTO, worked tirelessly to help fill in the gaps, write up documentation and interview potential replacements."
          }
        ]
      },
      {
        "company_name" : "Seventh Art Group",
        "company_role" : "Web/iOS Developer",
        "date_start" : "October 2009",
        "date_end" : "December 2011",
        "responsibilities" : [
          {
            "title" : "untitled",
            "order" : 1,
            "description" : "Worked as a web developer and constructed MySQL Data powered Building and Development Websites with the back end written in PHP and the front end in HTML, CSS and JavaScript/jQuery plugins"
          },
          {
            "title" : "untitled",
            "order" : 2,
            "description" : "Developed a Site Application that utilized the CodeIgniter framework that provided database connections with additional logic that formed a back end to increase development efficiency"
          },
          {
            "title" : "untitled",
            "order" : 3,
            "description" : "Developed a CRM in order for various versions of Design Comparables to be displayed for clients"
          },
          {
            "title" : "untitled",
            "order" : 4,
            "description" : "Designed and developed multiple iOS applications for the iPad and iPhone for internal purposes"
          }
        ]
      },
      {
        "company_name" : "Leiter Realty",
        "company_role" : "Web Department",
        "date_start" : "April 2009",
        "date_end" : "August 2009",
        "responsibilities" : [
          {
            "title" : "untitled",
            "order" : 1,
            "description" : "In charge of upgrading various site cross-compatibility issues"
          },
          {
            "title" : "untitled",
            "order" : 2,
            "description" : "Provided modifications of various existing site issues specific to the listing service back end"
          },
          {
            "title" : "untitled",
            "order" : 3,
            "description" : "Maintained the front and back end of http://leiterrealty.com/"
          }
        ]
      },
      {
        "company_name" : "OnSite Services",
        "company_role" : "Web Designer/Developer Subcontractor",
        "date_start" : "November 2007",
        "date_end" : "December 2008",
        "responsibilities" : [
          {
            "title" : "untitled",
            "order" : 1,
            "description" : "Developed feature sets from assessed client needs"
          },
          {
            "title" : "untitled",
            "order" : 2,
            "description" : "Developed websites to be Search Engine Recognized"
          },
          {
            "title" : "untitled",
            "order" : 3,
            "description" : "Reverse-Engineer websites to troubleshoot existing issues"
          }
        ]
      }
    ],
    "schools" : [
      {
        "school_name" : "Tufts University",
        "wut" : "BA in Computer Engineering",
        "date_of_graduation" : "June 2005"
      }
    ],
    "projects" : [
      {
        "title" : "When searching for a place to live in SF, I had to get creative",
        "link_title" : "https://github.com/smokinjoe/thegreatesthousemate",
        "link_url" : "https://github.com/smokinjoe/thegreatesthousemate"
      },
      {
        "title" : "Rock, Paper, Scissors engine for determining draft order (in progress)",
        "link_title" : "https://github.com/smokinjoe/rockpaperscissors",
        "link_url" : "https://github.com/smokinjoe/rockpaperscissors"
      },
      {
        "title" : "Contributing to Hubot-Scripts Project",
        "link_title" : "https://github.com/smokinjoe/hubot-scripts",
        "link_url" : "https://github.com/smokinjoe/hubot-scripts"
      },
      {
        "title" : "Construction of PyroCMS powered Product Listing Website",
        "link_title" : "http://ekiert.net/GRElist/",
        "link_url" : "http://ekiert.net/GRElist/"
      },
      {
        "title" : "Canvas Powered Ball Game",
        "link_title" : "http://smokinjoenews.com/canvas_game",
        "link_url" : "http://smokinjoenews.com/canvas_game"
      },
      {
        "title" : "Working with PanoramaGL Library for iOS",
        "link_title" : "http://code.google.com/p/panoramagl/",
        "link_url" : "http://code.google.com/p/panoramagl/"
      }
    ],
    "references" : "References available upon request"
  };

  return Resume;
});

function ResumeController($scope, Resume) {
  $scope.resume = Resume;
};
