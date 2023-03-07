const countries = [
  { countryId: 'AD', lat: '42.546245', lon: '1.601554', country: 'Andorra' },
  { countryId: 'AE', lat: '23.424076', lon: '53.847818', country: 'United Arab Emirates' },
  { countryId: 'AF', lat: '33.93911', lon: '67.709953', country: 'Afghanistan' },
  { countryId: 'AG', lat: '17.060816', lon: '-61.796428', country: 'Antigua and Barbuda' },
  { countryId: 'AI', lat: '18.220554', lon: '-63.068615', country: 'Anguilla' },
  { countryId: 'AL', lat: '41.153332', lon: '20.168331', country: 'Albania' },
  { countryId: 'AM', lat: '40.069099', lon: '45.038189', country: 'Armenia' },
  { countryId: 'AN', lat: '12.226079', lon: '-69.060087', country: 'Netherlands Antilles' },
  { countryId: 'AO', lat: '-11.202692', lon: '17.873887', country: 'Angola' },
  { countryId: 'AQ', lat: '-75.250973', lon: '-0.071389', country: 'Antarctica' },
  { countryId: 'AR', lat: '-38.416097', lon: '-63.616672', country: 'Argentina' },
  { countryId: 'AS', lat: '-14.270972', lon: '-170.132217', country: 'American Samoa' },
  { countryId: 'AT', lat: '47.516231', lon: '14.550072', country: 'Austria' },
  { countryId: 'AU', lat: '-25.274398', lon: '133.775136', country: 'Australia' },
  { countryId: 'AW', lat: '12.52111', lon: '-69.968338', country: 'Aruba' },
  { countryId: 'AZ', lat: '40.143105', lon: '47.576927', country: 'Azerbaijan' },
  { countryId: 'BA', lat: '43.915886', lon: '17.679076', country: 'Bosnia and Herzegovina' },
  { countryId: 'BB', lat: '13.193887', lon: '-59.543198', country: 'Barbados' },
  { countryId: 'BD', lat: '23.684994', lon: '90.356331', country: 'Bangladesh' },
  { countryId: 'BE', lat: '50.503887', lon: '4.469936', country: 'Belgium' },
  { countryId: 'BF', lat: '12.238333', lon: '-1.561593', country: 'Burkina Faso' },
  { countryId: 'BG', lat: '42.733883', lon: '25.48583', country: 'Bulgaria' },
  { countryId: 'BH', lat: '25.930414', lon: '50.637772', country: 'Bahrain' },
  { countryId: 'BI', lat: '-3.373056', lon: '29.918886', country: 'Burundi' },
  { countryId: 'BJ', lat: '9.30769', lon: '2.315834', country: 'Benin' },
  { countryId: 'BM', lat: '32.321384', lon: '-64.75737', country: 'Bermuda' },
  { countryId: 'BN', lat: '4.535277', lon: '114.727669', country: 'Brunei' },
  { countryId: 'BO', lat: '-16.290154', lon: '-63.588653', country: 'Bolivia' },
  { countryId: 'BR', lat: '-14.235004', lon: '-51.92528', country: 'Brazil' },
  { countryId: 'BS', lat: '25.03428', lon: '-77.39628', country: 'Bahamas' },
  { countryId: 'BT', lat: '27.514162', lon: '90.433601', country: 'Bhutan' },
  { countryId: 'BV', lat: '-54.423199', lon: '3.413194', country: 'Bouvet Island' },
  { countryId: 'BW', lat: '-22.328474', lon: '24.684866', country: 'Botswana' },
  { countryId: 'BY', lat: '53.709807', lon: '27.953389', country: 'Belarus' },
  { countryId: 'BZ', lat: '17.189877', lon: '-88.49765', country: 'Belize' },
  { countryId: 'CA', lat: '56.130366', lon: '-106.346771', country: 'Canada' },
  { countryId: 'CC', lat: '-12.164165', lon: '96.870956', country: 'Cocos [Keeling] Islands' },
  { countryId: 'CD', lat: '-4.038333', lon: '21.758664', country: 'Congo [DRC]' },
  { countryId: 'CF', lat: '6.611111', lon: '20.939444', country: 'Central African Republic' },
  { countryId: 'CG', lat: '-0.228021', lon: '15.827659', country: 'Congo [Republic]' },
  { countryId: 'CH', lat: '46.818188', lon: '8.227512', country: 'Switzerland' },
  { countryId: 'CI', lat: '7.539989', lon: '-5.54708', country: 'Côte d\'Ivoire' },
  { countryId: 'CK', lat: '-21.236736', lon: '-159.777671', country: 'Cook Islands' },
  { countryId: 'CL', lat: '-35.675147', lon: '-71.542969', country: 'Chile' },
  { countryId: 'CM', lat: '7.369722', lon: '12.354722', country: 'Cameroon' },
  { countryId: 'CN', lat: '35.86166', lon: '104.195397', country: 'China' },
  { countryId: 'CO', lat: '4.570868', lon: '-74.297333', country: 'Colombia' },
  { countryId: 'CR', lat: '9.748917', lon: '-83.753428', country: 'Costa Rica' },
  { countryId: 'CU', lat: '21.521757', lon: '-77.781167', country: 'Cuba' },
  { countryId: 'CV', lat: '16.002082', lon: '-24.013197', country: 'Cape Verde' },
  { countryId: 'CX', lat: '-10.447525', lon: '105.690449', country: 'Christmas Island' },
  { countryId: 'CY', lat: '35.126413', lon: '33.429859', country: 'Cyprus' },
  { countryId: 'CZ', lat: '49.817492', lon: '15.472962', country: 'Czech Republic' },
  { countryId: 'DE', lat: '51.165691', lon: '10.451526', country: 'Germany' },
  { countryId: 'DJ', lat: '11.825138', lon: '42.590275', country: 'Djibouti' },
  { countryId: 'DK', lat: '56.26392', lon: '9.501785', country: 'Denmark' },
  { countryId: 'DM', lat: '15.414999', lon: '-61.370976', country: 'Dominica' },
  { countryId: 'DO', lat: '18.735693', lon: '-70.162651', country: 'Dominican Republic' },
  { countryId: 'DZ', lat: '28.033886', lon: '1.659626', country: 'Algeria' },
  { countryId: 'EC', lat: '-1.831239', lon: '-78.183406', country: 'Ecuador' },
  { countryId: 'EE', lat: '58.595272', lon: '25.013607', country: 'Estonia' },
  { countryId: 'EG', lat: '26.820553', lon: '30.802498', country: 'Egypt' },
  { countryId: 'EH', lat: '24.215527', lon: '-12.885834', country: 'Western Sahara' },
  { countryId: 'ER', lat: '15.179384', lon: '39.782334', country: 'Eritrea' },
  { countryId: 'ES', lat: '40.463667', lon: '-3.74922', country: 'Spain' },
  { countryId: 'ET', lat: '9.145', lon: '40.489673', country: 'Ethiopia' },
  { countryId: 'FI', lat: '61.92411', lon: '25.748151', country: 'Finland' },
  { countryId: 'FJ', lat: '-16.578193', lon: '179.414413', country: 'Fiji' },
  { countryId: 'FK', lat: '-51.796253', lon: '-59.523613', country: 'Falkland Islands [Islas Malvinas]' },
  { countryId: 'FM', lat: '7.425554', lon: '150.550812', country: 'Micronesia' },
  { countryId: 'FO', lat: '61.892635', lon: '-6.911806', country: 'Faroe Islands' },
  { countryId: 'FR', lat: '46.227638', lon: '2.213749', country: 'France' },
  { countryId: 'GA', lat: '-0.803689', lon: '11.609444', country: 'Gabon' },
  { countryId: 'GB', lat: '55.378051', lon: '-3.435973', country: 'United Kingdom' },
  { countryId: 'GD', lat: '12.262776', lon: '-61.604171', country: 'Grenada' },
  { countryId: 'GE', lat: '42.315407', lon: '43.356892', country: 'Georgia' },
  { countryId: 'GF', lat: '3.933889', lon: '-53.125782', country: 'French Guiana' },
  { countryId: 'GG', lat: '49.465691', lon: '-2.585278', country: 'Guernsey' },
  { countryId: 'GH', lat: '7.946527', lon: '-1.023194', country: 'Ghana' },
  { countryId: 'GI', lat: '36.137741', lon: '-5.345374', country: 'Gibraltar' },
  { countryId: 'GL', lat: '71.706936', lon: '-42.604303', country: 'Greenland' },
  { countryId: 'GM', lat: '13.443182', lon: '-15.310139', country: 'Gambia' },
  { countryId: 'GN', lat: '9.945587', lon: '-9.696645', country: 'Guinea' },
  { countryId: 'GP', lat: '16.995971', lon: '-62.067641', country: 'Guadeloupe' },
  { countryId: 'GQ', lat: '1.650801', lon: '10.267895', country: 'Equatorial Guinea' },
  { countryId: 'GR', lat: '39.074208', lon: '21.824312', country: 'Greece' },
  { countryId: 'GS', lat: '-54.429579', lon: '-36.587909', country: 'South Georgia and the South Sandwich Islands' },
  { countryId: 'GT', lat: '15.783471', lon: '-90.230759', country: 'Guatemala' },
  { countryId: 'GU', lat: '13.444304', lon: '144.793731', country: 'Guam' },
  { countryId: 'GW', lat: '11.803749', lon: '-15.180413', country: 'Guinea-Bissau' },
  { countryId: 'GY', lat: '4.860416', lon: '-58.93018', country: 'Guyana' },
  { countryId: 'GZ', lat: '31.354676', lon: '34.308825', country: 'Gaza Strip' },
  { countryId: 'HK', lat: '22.396428', lon: '114.109497', country: 'Hong Kong' },
  { countryId: 'HM', lat: '-53.08181', lon: '73.504158', country: 'Heard Island and McDonald Islands' },
  { countryId: 'HN', lat: '15.199999', lon: '-86.241905', country: 'Honduras' },
  { countryId: 'HR', lat: '45.1', lon: '15.2', country: 'Croatia' },
  { countryId: 'HT', lat: '18.971187', lon: '-72.285215', country: 'Haiti' },
  { countryId: 'HU', lat: '47.162494', lon: '19.503304', country: 'Hungary' },
  { countryId: 'ID', lat: '-0.789275', lon: '113.921327', country: 'Indonesia' },
  { countryId: 'IE', lat: '53.41291', lon: '-8.24389', country: 'Ireland' },
  { countryId: 'IL', lat: '31.046051', lon: '34.851612', country: 'Israel' },
  { countryId: 'IM', lat: '54.236107', lon: '-4.548056', country: 'Isle of Man' },
  { countryId: 'IN', lat: '20.593684', lon: '78.96288', country: 'India' },
  { countryId: 'IO', lat: '-6.343194', lon: '71.876519', country: 'British Indian Ocean Territory' },
  { countryId: 'IQ', lat: '33.223191', lon: '43.679291', country: 'Iraq' },
  { countryId: 'IR', lat: '32.427908', lon: '53.688046', country: 'Iran' },
  { countryId: 'IS', lat: '64.963051', lon: '-19.020835', country: 'Iceland' },
  { countryId: 'IT', lat: '41.87194', lon: '12.56738', country: 'Italy' },
  { countryId: 'JE', lat: '49.214439', lon: '-2.13125', country: 'Jersey' },
  { countryId: 'JM', lat: '18.109581', lon: '-77.297508', country: 'Jamaica' },
  { countryId: 'JO', lat: '30.585164', lon: '36.238414', country: 'Jordan' },
  { countryId: 'JP', lat: '36.204824', lon: '138.252924', country: 'Japan' },
  { countryId: 'KE', lat: '-0.023559', lon: '37.906193', country: 'Kenya' },
  { countryId: 'KG', lat: '41.20438', lon: '74.766098', country: 'Kyrgyzstan' },
  { countryId: 'KH', lat: '12.565679', lon: '104.990963', country: 'Cambodia' },
  { countryId: 'KI', lat: '-3.370417', lon: '-168.734039', country: 'Kiribati' },
  { countryId: 'KM', lat: '-11.875001', lon: '43.872219', country: 'Comoros' },
  { countryId: 'KN', lat: '17.357822', lon: '-62.782998', country: 'Saint Kitts and Nevis' },
  { countryId: 'KP', lat: '40.339852', lon: '127.510093', country: 'North Korea' },
  { countryId: 'KR', lat: '35.907757', lon: '127.766922', country: 'South Korea' },
  { countryId: 'KW', lat: '29.31166', lon: '47.481766', country: 'Kuwait' },
  { countryId: 'KY', lat: '19.513469', lon: '-80.566956', country: 'Cayman Islands' },
  { countryId: 'KZ', lat: '48.019573', lon: '66.923684', country: 'Kazakhstan' },
  { countryId: 'LA', lat: '19.85627', lon: '102.495496', country: 'Laos' },
  { countryId: 'LB', lat: '33.854721', lon: '35.862285', country: 'Lebanon' },
  { countryId: 'LC', lat: '13.909444', lon: '-60.978893', country: 'Saint Lucia' },
  { countryId: 'LI', lat: '47.166', lon: '9.555373', country: 'Liechtenstein' },
  { countryId: 'LK', lat: '7.873054', lon: '80.771797', country: 'Sri Lanka' },
  { countryId: 'LR', lat: '6.428055', lon: '-9.429499', country: 'Liberia' },
  { countryId: 'LS', lat: '-29.609988', lon: '28.233608', country: 'Lesotho' },
  { countryId: 'LT', lat: '55.169438', lon: '23.881275', country: 'Lithuania' },
  { countryId: 'LU', lat: '49.815273', lon: '6.129583', country: 'Luxembourg' },
  { countryId: 'LV', lat: '56.879635', lon: '24.603189', country: 'Latvia' },
  { countryId: 'LY', lat: '26.3351', lon: '17.228331', country: 'Libya' },
  { countryId: 'MA', lat: '31.791702', lon: '-7.09262', country: 'Morocco' },
  { countryId: 'MC', lat: '43.750298', lon: '7.412841', country: 'Monaco' },
  { countryId: 'MD', lat: '47.411631', lon: '28.369885', country: 'Moldova' },
  { countryId: 'ME', lat: '42.708678', lon: '19.37439', country: 'Montenegro' },
  { countryId: 'MG', lat: '-18.766947', lon: '46.869107', country: 'Madagascar' },
  { countryId: 'MH', lat: '7.131474', lon: '171.184478', country: 'Marshall Islands' },
  { countryId: 'MK', lat: '41.608635', lon: '21.745275', country: 'Macedonia [FYROM]' },
  { countryId: 'ML', lat: '17.570692', lon: '-3.996166', country: 'Mali' },
  { countryId: 'MM', lat: '21.913965', lon: '95.956223', country: 'Myanmar [Burma]' },
  { countryId: 'MN', lat: '46.862496', lon: '103.846656', country: 'Mongolia' },
  { countryId: 'MO', lat: '22.198745', lon: '113.543873', country: 'Macau' },
  { countryId: 'MP', lat: '17.33083', lon: '145.38469', country: 'Northern Mariana Islands' },
  { countryId: 'MQ', lat: '14.641528', lon: '-61.024174', country: 'Martinique' },
  { countryId: 'MR', lat: '21.00789', lon: '-10.940835', country: 'Mauritania' },
  { countryId: 'MS', lat: '16.742498', lon: '-62.187366', country: 'Montserrat' },
  { countryId: 'MT', lat: '35.937496', lon: '14.375416', country: 'Malta' },
  { countryId: 'MU', lat: '-20.348404', lon: '57.552152', country: 'Mauritius' },
  { countryId: 'MV', lat: '3.202778', lon: '73.22068', country: 'Maldives' },
  { countryId: 'MW', lat: '-13.254308', lon: '34.301525', country: 'Malawi' },
  { countryId: 'MX', lat: '23.634501', lon: '-102.552784', country: 'Mexico' },
  { countryId: 'MY', lat: '4.210484', lon: '101.975766', country: 'Malaysia' },
  { countryId: 'MZ', lat: '-18.665695', lon: '35.529562', country: 'Mozambique' },
  { countryId: 'NA', lat: '-22.95764', lon: '18.49041', country: 'Namibia' },
  { countryId: 'NC', lat: '-20.904305', lon: '165.618042', country: 'New Caledonia' },
  { countryId: 'NE', lat: '17.607789', lon: '8.081666', country: 'Niger' },
  { countryId: 'NF', lat: '-29.040835', lon: '167.954712', country: 'Norfolk Island' },
  { countryId: 'NG', lat: '9.081999', lon: '8.675277', country: 'Nigeria' },
  { countryId: 'NI', lat: '12.865416', lon: '-85.207229', country: 'Nicaragua' },
  { countryId: 'NL', lat: '52.132633', lon: '5.291266', country: 'Netherlands' },
  { countryId: 'NO', lat: '60.472024', lon: '8.468946', country: 'Norway' },
  { countryId: 'NP', lat: '28.394857', lon: '84.124008', country: 'Nepal' },
  { countryId: 'NR', lat: '-0.522778', lon: '166.931503', country: 'Nauru' },
  { countryId: 'NU', lat: '-19.054445', lon: '-169.867233', country: 'Niue' },
  { countryId: 'NZ', lat: '-40.900557', lon: '174.885971', country: 'New Zealand' },
  { countryId: 'OM', lat: '21.512583', lon: '55.923255', country: 'Oman' },
  { countryId: 'PA', lat: '8.537981', lon: '-80.782127', country: 'Panama' },
  { countryId: 'PE', lat: '-9.189967', lon: '-75.015152', country: 'Peru' },
  { countryId: 'PF', lat: '-17.679742', lon: '-149.406843', country: 'French Polynesia' },
  { countryId: 'PG', lat: '-6.314993', lon: '143.95555', country: 'Papua New Guinea' },
  { countryId: 'PH', lat: '12.879721', lon: '121.774017', country: 'Philippines' },
  { countryId: 'PK', lat: '30.375321', lon: '69.345116', country: 'Pakistan' },
  { countryId: 'PL', lat: '51.919438', lon: '19.145136', country: 'Poland' },
  { countryId: 'PM', lat: '46.941936', lon: '-56.27111', country: 'Saint Pierre and Miquelon' },
  { countryId: 'PN', lat: '-24.703615', lon: '-127.439308', country: 'Pitcairn Islands' },
  { countryId: 'PR', lat: '18.220833', lon: '-66.590149', country: 'Puerto Rico' },
  { countryId: 'PS', lat: '31.952162', lon: '35.233154', country: 'Palestinian Territories' },
  { countryId: 'PT', lat: '39.399872', lon: '-8.224454', country: 'Portugal' },
  { countryId: 'PW', lat: '7.51498', lon: '134.58252', country: 'Palau' },
  { countryId: 'PY', lat: '-23.442503', lon: '-58.443832', country: 'Paraguay' },
  { countryId: 'QA', lat: '25.354826', lon: '51.183884', country: 'Qatar' },
  { countryId: 'RE', lat: '-21.115141', lon: '55.536384', country: 'Réunion' },
  { countryId: 'RO', lat: '45.943161', lon: '24.96676', country: 'Romania' },
  { countryId: 'RS', lat: '44.016521', lon: '21.005859', country: 'Serbia' },
  { countryId: 'RU', lat: '61.52401', lon: '105.318756', country: 'Russia' },
  { countryId: 'RW', lat: '-1.940278', lon: '29.873888', country: 'Rwanda' },
  { countryId: 'SA', lat: '23.885942', lon: '45.079162', country: 'Saudi Arabia' },
  { countryId: 'SB', lat: '-9.64571', lon: '160.156194', country: 'Solomon Islands' },
  { countryId: 'SC', lat: '-4.679574', lon: '55.491977', country: 'Seychelles' },
  { countryId: 'SD', lat: '12.862807', lon: '30.217636', country: 'Sudan' },
  { countryId: 'SE', lat: '60.128161', lon: '18.643501', country: 'Sweden' },
  { countryId: 'SG', lat: '1.352083', lon: '103.819836', country: 'Singapore' },
  { countryId: 'SH', lat: '-24.143474', lon: '-10.030696', country: 'Saint Helena' },
  { countryId: 'SI', lat: '46.151241', lon: '14.995463', country: 'Slovenia' },
  { countryId: 'SJ', lat: '77.553604', lon: '23.670272', country: 'Svalbard and Jan Mayen' },
  { countryId: 'SK', lat: '48.669026', lon: '19.699024', country: 'Slovakia' },
  { countryId: 'SL', lat: '8.460555', lon: '-11.779889', country: 'Sierra Leone' },
  { countryId: 'SM', lat: '43.94236', lon: '12.457777', country: 'San Marino' },
  { countryId: 'SN', lat: '14.497401', lon: '-14.452362', country: 'Senegal' },
  { countryId: 'SO', lat: '5.152149', lon: '46.199616', country: 'Somalia' },
  { countryId: 'SR', lat: '3.919305', lon: '-56.027783', country: 'Suriname' },
  { countryId: 'ST', lat: '0.18636', lon: '6.613081', country: 'São Tomé and Príncipe' },
  { countryId: 'SV', lat: '13.794185', lon: '-88.89653', country: 'El Salvador' },
  { countryId: 'SY', lat: '34.802075', lon: '38.996815', country: 'Syria' },
  { countryId: 'SZ', lat: '-26.522503', lon: '31.465866', country: 'Swaziland' },
  { countryId: 'TC', lat: '21.694025', lon: '-71.797928', country: 'Turks and Caicos Islands' },
  { countryId: 'TD', lat: '15.454166', lon: '18.732207', country: 'Chad' },
  { countryId: 'TF', lat: '-49.280366', lon: '69.348557', country: 'French Southern Territories' },
  { countryId: 'TG', lat: '8.619543', lon: '0.824782', country: 'Togo' },
  { countryId: 'TH', lat: '15.870032', lon: '100.992541', country: 'Thailand' },
  { countryId: 'TJ', lat: '38.861034', lon: '71.276093', country: 'Tajikistan' },
  { countryId: 'TK', lat: '-8.967363', lon: '-171.855881', country: 'Tokelau' },
  { countryId: 'TL', lat: '-8.874217', lon: '125.727539', country: 'Timor-Leste' },
  { countryId: 'TM', lat: '38.969719', lon: '59.556278', country: 'Turkmenistan' },
  { countryId: 'TN', lat: '33.886917', lon: '9.537499', country: 'Tunisia' },
  { countryId: 'TO', lat: '-21.178986', lon: '-175.198242', country: 'Tonga' },
  { countryId: 'TR', lat: '38.963745', lon: '35.243322', country: 'Turlon' },
  { countryId: 'TT', lat: '10.691803', lon: '-61.222503', country: 'Trinidad and Tobago' },
  { countryId: 'TV', lat: '-7.109535', lon: '177.64933', country: 'Tuvalu' },
  { countryId: 'TW', lat: '23.69781', lon: '120.960515', country: 'Taiwan' },
  { countryId: 'TZ', lat: '-6.369028', lon: '34.888822', country: 'Tanzania' },
  { countryId: 'UA', lat: '48.379433', lon: '31.16558', country: 'Ukraine' },
  { countryId: 'UG', lat: '1.373333', lon: '32.290275', country: 'Uganda' },
  { countryId: 'UM', lat: '		U.S. Minor Outlying Islands' },
  { countryId: 'US', lat: '37.09024', lon: '-95.712891', country: 'United States' },
  { countryId: 'UY', lat: '-32.522779', lon: '-55.765835', country: 'Uruguay' },
  { countryId: 'UZ', lat: '41.377491', lon: '64.585262', country: 'Uzbekistan' },
  { countryId: 'VA', lat: '41.902916', lon: '12.453389', country: 'Vatican City' },
  { countryId: 'VC', lat: '12.984305', lon: '-61.287228', country: 'Saint Vincent and the Grenadines' },
  { countryId: 'VE', lat: '6.42375', lon: '-66.58973', country: 'Venezuela' },
  { countryId: 'VG', lat: '18.420695', lon: '-64.639968', country: 'British Virgin Islands' },
  { countryId: 'VI', lat: '18.335765', lon: '-64.896335', country: 'U.S. Virgin Islands' },
  { countryId: 'VN', lat: '14.058324', lon: '108.277199', country: 'Vietnam' },
  { countryId: 'VU', lat: '-15.376706', lon: '166.959158', country: 'Vanuatu' },
  { countryId: 'WF', lat: '-13.768752', lon: '-177.156097', country: 'Wallis and Futuna' },
  { countryId: 'WS', lat: '-13.759029', lon: '-172.104629', country: 'Samoa' },
  { countryId: 'XK', lat: '42.602636', lon: '20.902977', country: 'Kosovo' },
  { countryId: 'YE', lat: '15.552727', lon: '48.516388', country: 'Yemen' },
  { countryId: 'YT', lat: '-12.8275', lon: '45.166244', country: 'Mayotte' },
  { countryId: 'ZA', lat: '-30.559482', lon: '22.937506', country: 'South Africa' },
  { countryId: 'ZM', lat: '-13.133897', lon: '27.849332', country: 'Zambia' },
  { countryId: 'ZW', lat: '-19.015438', lon: '29.154857', country: 'Zimbabwe' }
]

exports.countries = countries
