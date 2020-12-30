const countries = [
    {
        "name": "Afghanistan",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}, {\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "regional_office"
    },
    {
        "name": "Aland Islands",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "regional_office"
    },
    {
        "name": "Albania",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "regional_office"
    },
    {
        "name": "Algeria",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "regional_office"
    },
    {
        "name": "American Samoa",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "regional_office"
    },
    {
        "name": "Andorra",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "regional_office"
    },
    {
        "name": "Angola",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "regional_office"
    },
    {
        "name": "Anguilla",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "regional_office"
    },
    {
        "name": "Antarctica",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Antarctica",
        "office": "regional_office"
    },
    {
        "name": "Antigua and Barbuda",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "regional_office"
    },
    {
        "name": "Argentina",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "South America",
        "office": "regional_office"
    },
    {
        "name": "Armenia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "regional_office"
    },
    {
        "name": "Aruba",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "regional_office"
    },
    {
        "name": "Australia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "regional_office"
    },
    {
        "name": "Austria",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "regional_office"
    },
    {
        "name": "Azerbaijan",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "regional_office"
    },
    {
        "name": "Bahamas",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "regional_office"
    },
    {
        "name": "Bahrain",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "regional_office"
    },
    {
        "name": "Bangladesh",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "regional_office"
    },
    {
        "name": "Barbados",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "regional_office"
    },
    {
        "name": "Belarus",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "regional_office"
    },
    {
        "name": "Belgium",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "regional_office"
    },
    {
        "name": "Belize",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "regional_office"
    },
    {
        "name": "Benin",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "regional_office"
    },
    {
        "name": "Bermuda",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "regional_office"
    },
    {
        "name": "Bhutan",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "regional_office"
    },
    {
        "name": "Bolivia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "South America",
        "office": "regional_office"
    },
    {
        "name": "Bonaire, Sint Eustatius and Saba",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "regional_office"
    },
    {
        "name": "Bosnia and Herzegovina",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "regional_office"
    },
    {
        "name": "Botswana",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "regional_office"
    },
    {
        "name": "Bouvet Island",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Antarctica",
        "office": "regional_office"
    },
    {
        "name": "Brazil",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "South America",
        "office": "regional_office"
    },
    {
        "name": "British Indian Ocean Territory",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "regional_office"
    },
    {
        "name": "Brunei Darussalam",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "regional_office"
    },
    {
        "name": "Bulgaria",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "regional_office"
    },
    {
        "name": "Burkina Faso",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "regional_office"
    },
    {
        "name": "Burundi",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "regional_office"
    },
    {
        "name": "Cambodia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "regional_office"
    },
    {
        "name": "Cameroon",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "regional_office"
    },
    {
        "name": "Canada",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "regional_office"
    },
    {
        "name": "Cape Verde",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "regional_office"
    },
    {
        "name": "Cayman Islands",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "regional_office"
    },
    {
        "name": "Central African Republic",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "regional_office"
    },
    {
        "name": "Chad",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "regional_office"
    },
    {
        "name": "Chile",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "South America",
        "office": "regional_office"
    },
    {
        "name": "China",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "regional_office"
    },
    {
        "name": "Christmas Island",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "regional_office"
    },
    {
        "name": "Cocos (Keeling) Islands",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "regional_office"
    },
    {
        "name": "Colombia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "South America",
        "office": "regional_office"
    },
    {
        "name": "Comoros",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "representation_office"
    },
    {
        "name": "Congo",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "representation_office"
    },
    {
        "name": "Congo, the Democratic Republic of the",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "representation_office"
    },
    {
        "name": "Cook Islands",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "representation_office"
    },
    {
        "name": "Costa Rica",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "representation_office"
    },
    {
        "name": "Cote D'Ivoire",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "representation_office"
    },
    {
        "name": "Croatia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "representation_office"
    },
    {
        "name": "Cuba",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "representation_office"
    },
    {
        "name": "Curacao",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "representation_office"
    },
    {
        "name": "Cyprus",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "representation_office"
    },
    {
        "name": "Czech Republic",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "representation_office"
    },
    {
        "name": "Denmark",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "representation_office"
    },
    {
        "name": "Djibouti",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "representation_office"
    },
    {
        "name": "Dominica",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "representation_office"
    },
    {
        "name": "Dominican Republic",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "representation_office"
    },
    {
        "name": "Ecuador",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "South America",
        "office": "representation_office"
    },
    {
        "name": "Egypt",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "representation_office"
    },
    {
        "name": "El Salvador",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "representation_office"
    },
    {
        "name": "Equatorial Guinea",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "representation_office"
    },
    {
        "name": "Eritrea",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "representation_office"
    },
    {
        "name": "Estonia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "representation_office"
    },
    {
        "name": "Ethiopia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "representation_office"
    },
    {
        "name": "Falkland Islands (Malvinas)",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "South America",
        "office": "representation_office"
    },
    {
        "name": "Faroe Islands",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "representation_office"
    },
    {
        "name": "Fiji",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "representation_office"
    },
    {
        "name": "Finland",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "representation_office"
    },
    {
        "name": "France",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "representation_office"
    },
    {
        "name": "French Guiana",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "South America",
        "office": "representation_office"
    },
    {
        "name": "French Polynesia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "representation_office"
    },
    {
        "name": "French Southern Territories",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Antarctica",
        "office": "representation_office"
    },
    {
        "name": "Gabon",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "representation_office"
    },
    {
        "name": "Gambia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "representation_office"
    },
    {
        "name": "Georgia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "representation_office"
    },
    {
        "name": "Germany",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "representation_office"
    },
    {
        "name": "Ghana",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "representation_office"
    },
    {
        "name": "Gibraltar",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "representation_office"
    },
    {
        "name": "Greece",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "representation_office"
    },
    {
        "name": "Greenland",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "representation_office"
    },
    {
        "name": "Grenada",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "representation_office"
    },
    {
        "name": "Guadeloupe",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "representation_office"
    },
    {
        "name": "Guam",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "representation_office"
    },
    {
        "name": "Guatemala",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "representation_office"
    },
    {
        "name": "Guernsey",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "representation_office"
    },
    {
        "name": "Guinea",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "representation_office"
    },
    {
        "name": "Guinea-Bissau",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "representation_office"
    },
    {
        "name": "Guyana",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "South America",
        "office": "representation_office"
    },
    {
        "name": "Haiti",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "representation_office"
    },
    {
        "name": "Heard Island and Mcdonald Islands",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Antarctica",
        "office": "representation_office"
    },
    {
        "name": "Holy See (Vatican City State)",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "representation_office"
    },
    {
        "name": "Honduras",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "representation_office"
    },
    {
        "name": "Hong Kong",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "representation_office"
    },
    {
        "name": "Hungary",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "representation_office"
    },
    {
        "name": "Iceland",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "representation_office"
    },
    {
        "name": "India",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "representation_office"
    },
    {
        "name": "Indonesia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "representation_office"
    },
    {
        "name": "Iran, Islamic Republic of",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "representation_office"
    },
    {
        "name": "Iraq",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "representation_office"
    },
    {
        "name": "Ireland",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "representation_office"
    },
    {
        "name": "Isle of Man",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "representation_office"
    },
    {
        "name": "Israel",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "representation_office"
    },
    {
        "name": "Italy",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "representation_office"
    },
    {
        "name": "Jamaica",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "representation_office"
    },
    {
        "name": "Japan",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "representation_office"
    },
    {
        "name": "Jersey",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "representation_office"
    },
    {
        "name": "Jordan",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "representation_office"
    },
    {
        "name": "Kazakhstan",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "representation_office"
    },
    {
        "name": "Kenya",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "representation_office"
    },
    {
        "name": "Kiribati",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "representation_office"
    },
    {
        "name": "Korea, Democratic People\"s Republic of",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "representation_office"
    },
    {
        "name": "Korea, Republic of",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "representation_office"
    },
    {
        "name": "Kosovo",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "representation_office"
    },
    {
        "name": "Kuwait",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "representation_office"
    },
    {
        "name": "Kyrgyzstan",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "representation_office"
    },
    {
        "name": "Lao People's Democratic Republic",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "representation_office"
    },
    {
        "name": "Latvia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "representation_office"
    },
    {
        "name": "Lebanon",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "representation_office"
    },
    {
        "name": "Lesotho",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "representation_office"
    },
    {
        "name": "Liberia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "representation_office"
    },
    {
        "name": "Libyan Arab Jamahiriya",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "representation_office"
    },
    {
        "name": "Liechtenstein",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "representation_office"
    },
    {
        "name": "Lithuania",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "representation_office"
    },
    {
        "name": "Luxembourg",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "representation_office"
    },
    {
        "name": "Macao",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "representation_office"
    },
    {
        "name": "Macedonia, the Former Yugoslav Republic of",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "representation_office"
    },
    {
        "name": "Madagascar",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "representation_office"
    },
    {
        "name": "Malawi",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "representation_office"
    },
    {
        "name": "Malaysia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "representation_office"
    },
    {
        "name": "Maldives",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "representation_office"
    },
    {
        "name": "Mali",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "representation_office"
    },
    {
        "name": "Malta",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "representation_office"
    },
    {
        "name": "Marshall Islands",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "representation_office"
    },
    {
        "name": "Martinique",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "representation_office"
    },
    {
        "name": "Mauritania",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "representation_office"
    },
    {
        "name": "Mauritius",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "representation_office"
    },
    {
        "name": "Mayotte",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "representation_office"
    },
    {
        "name": "Mexico",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "representation_office"
    },
    {
        "name": "Micronesia, Federated States of",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "representation_office"
    },
    {
        "name": "Moldova, Republic of",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "representation_office"
    },
    {
        "name": "Monaco",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "representation_office"
    },
    {
        "name": "Mongolia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "representation_office"
    },
    {
        "name": "Montenegro",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "representation_office"
    },
    {
        "name": "Montserrat",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "country_office"
    },
    {
        "name": "Morocco",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "country_office"
    },
    {
        "name": "Mozambique",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "country_office"
    },
    {
        "name": "Myanmar",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "country_office"
    },
    {
        "name": "Namibia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "country_office"
    },
    {
        "name": "Nauru",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "country_office"
    },
    {
        "name": "Nepal",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "country_office"
    },
    {
        "name": "Netherlands",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "country_office"
    },
    {
        "name": "Netherlands Antilles",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "country_office"
    },
    {
        "name": "New Caledonia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "country_office"
    },
    {
        "name": "New Zealand",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "country_office"
    },
    {
        "name": "Nicaragua",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "country_office"
    },
    {
        "name": "Niger",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "country_office"
    },
    {
        "name": "Nigeria",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "country_office"
    },
    {
        "name": "Niue",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "country_office"
    },
    {
        "name": "Norfolk Island",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "country_office"
    },
    {
        "name": "Northern Mariana Islands",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "country_office"
    },
    {
        "name": "Norway",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "country_office"
    },
    {
        "name": "Oman",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "country_office"
    },
    {
        "name": "Pakistan",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "country_office"
    },
    {
        "name": "Palau",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "country_office"
    },
    {
        "name": "Palestinian Territory, Occupied",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "country_office"
    },
    {
        "name": "Panama",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "country_office"
    },
    {
        "name": "Papua New Guinea",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "country_office"
    },
    {
        "name": "Paraguay",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "South America",
        "office": "country_office"
    },
    {
        "name": "Peru",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "South America",
        "office": "country_office"
    },
    {
        "name": "Philippines",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "country_office"
    },
    {
        "name": "Pitcairn",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "country_office"
    },
    {
        "name": "Poland",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "country_office"
    },
    {
        "name": "Portugal",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "country_office"
    },
    {
        "name": "Puerto Rico",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "country_office"
    },
    {
        "name": "Qatar",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "country_office"
    },
    {
        "name": "Reunion",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "country_office"
    },
    {
        "name": "Romania",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "country_office"
    },
    {
        "name": "Russian Federation",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "country_office"
    },
    {
        "name": "Rwanda",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "country_office"
    },
    {
        "name": "Saint Barthelemy",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "country_office"
    },
    {
        "name": "Saint Helena",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "country_office"
    },
    {
        "name": "Saint Kitts and Nevis",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "country_office"
    },
    {
        "name": "Saint Lucia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "country_office"
    },
    {
        "name": "Saint Martin",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "country_office"
    },
    {
        "name": "Saint Pierre and Miquelon",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "country_office"
    },
    {
        "name": "Saint Vincent and the Grenadines",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "country_office"
    },
    {
        "name": "Samoa",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "country_office"
    },
    {
        "name": "San Marino",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "country_office"
    },
    {
        "name": "Sao Tome and Principe",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "country_office"
    },
    {
        "name": "Saudi Arabia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "country_office"
    },
    {
        "name": "Senegal",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "country_office"
    },
    {
        "name": "Serbia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "country_office"
    },
    {
        "name": "Serbia and Montenegro",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "country_office"
    },
    {
        "name": "Seychelles",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "country_office"
    },
    {
        "name": "Sierra Leone",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "country_office"
    },
    {
        "name": "Singapore",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "country_office"
    },
    {
        "name": "Sint Maarten",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "country_office"
    },
    {
        "name": "Slovakia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "country_office"
    },
    {
        "name": "Slovenia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "country_office"
    },
    {
        "name": "Solomon Islands",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "country_office"
    },
    {
        "name": "Somalia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "country_office"
    },
    {
        "name": "South Africa",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "country_office"
    },
    {
        "name": "South Georgia and the South Sandwich Islands",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Antarctica",
        "office": "country_office"
    },
    {
        "name": "South Sudan",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "country_office"
    },
    {
        "name": "Spain",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "country_office"
    },
    {
        "name": "Sri Lanka",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "country_office"
    },
    {
        "name": "Sudan",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "country_office"
    },
    {
        "name": "Suriname",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "South America",
        "office": "country_office"
    },
    {
        "name": "Svalbard and Jan Mayen",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "country_office"
    },
    {
        "name": "Swaziland",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "country_office"
    },
    {
        "name": "Sweden",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "country_office"
    },
    {
        "name": "Switzerland",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "country_office"
    },
    {
        "name": "Syrian Arab Republic",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "country_office"
    },
    {
        "name": "Taiwan, Province of China",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "country_office"
    },
    {
        "name": "Tajikistan",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "country_office"
    },
    {
        "name": "Tanzania, United Republic of",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "country_office"
    },
    {
        "name": "Thailand",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "country_office"
    },
    {
        "name": "Timor-Leste",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "country_office"
    },
    {
        "name": "Togo",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "country_office"
    },
    {
        "name": "Tokelau",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "country_office"
    },
    {
        "name": "Tonga",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "country_office"
    },
    {
        "name": "Trinidad and Tobago",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "country_office"
    },
    {
        "name": "Tunisia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "country_office"
    },
    {
        "name": "Turkey",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "country_office"
    },
    {
        "name": "Turkmenistan",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "country_office"
    },
    {
        "name": "Turks and Caicos Islands",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "country_office"
    },
    {
        "name": "Tuvalu",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "country_office"
    },
    {
        "name": "Uganda",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "country_office"
    },
    {
        "name": "Ukraine",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "country_office"
    },
    {
        "name": "United Arab Emirates",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "country_office"
    },
    {
        "name": "United Kingdom",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "country_office"
    },
    {
        "name": "United States",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "country_office"
    },
    {
        "name": "United States Minor Outlying Islands",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "country_office"
    },
    {
        "name": "Uruguay",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "South America",
        "office": "country_office"
    },
    {
        "name": "Uzbekistan",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "country_office"
    },
    {
        "name": "Vanuatu",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "country_office"
    },
    {
        "name": "Venezuela",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "South America",
        "office": "country_office"
    },
    {
        "name": "Viet Nam",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "country_office"
    },
    {
        "name": "Virgin Islands, British",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "country_office"
    },
    {
        "name": "Virgin Islands, U.s.",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "country_office"
    },
    {
        "name": "Wallis and Futuna",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "country_office"
    },
    {
        "name": "Western Sahara",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "country_office"
    },
    {
        "name": "Yemen",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "country_office"
    },
    {
        "name": "Zambia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "country_office"
    },
    {
        "name": "Zimbabwe",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "country_office"
    }
];
export default countries;