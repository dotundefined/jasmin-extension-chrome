const CONSTANTS = {
  BREADCRUMB_TITLE: 'BREADCRUMB_TITLE',
  DESCRIPTION: 'DESCRIPTION',
  GET_HELP_BUTTON: 'GET_HELP_BUTTON',
  TEST_CASES: 'TEST_CASES',
  TEST_OUTPUT: 'TEST_OUTPUT',
};

const responsiveWebDesignChallenges = [
  {
    section: 'Basic Html And Html5',
    name: 'Say Hello To Html Elements',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Html And Html5',
    name: 'Headline With The H2 Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/headline-with-the-h2-element',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Html And Html5',
    name: 'Inform With The Paragraph Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/inform-with-the-paragraph-element',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Html And Html5',
    name: 'Fill In The Blank With Placeholder Text',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/fill-in-the-blank-with-placeholder-text',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Html And Html5',
    name: 'Uncomment Html',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/uncomment-html',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Html And Html5',
    name: 'Comment Out Html',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/comment-out-html',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Html And Html5',
    name: 'Delete Html Elements',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/delete-html-elements',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Html And Html5',
    name: 'Introduction To Html5 Elements',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/introduction-to-html5-elements',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Html And Html5',
    name: 'Add Images To Your Website',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/add-images-to-your-website',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Html And Html5',
    name: 'Link To External Pages With Anchor Elements',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/link-to-external-pages-with-anchor-elements',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Html And Html5',
    name: 'Link To Internal Sections Of A Page With Anchor Elements',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/link-to-internal-sections-of-a-page-with-anchor-elements',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Html And Html5',
    name: 'Nest An Anchor Element Within A Paragraph',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/nest-an-anchor-element-within-a-paragraph',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Html And Html5',
    name: 'Make Dead Links Using The Hash Symbol',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/make-dead-links-using-the-hash-symbol',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Html And Html5',
    name: 'Turn An Image Into A Link',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/turn-an-image-into-a-link',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Html And Html5',
    name: 'Create A Bulleted Unordered List',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-a-bulleted-unordered-list',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Html And Html5',
    name: 'Create An Ordered List',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-an-ordered-list',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Html And Html5',
    name: 'Create A Text Field',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-a-text-field',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Html And Html5',
    name: 'Add Placeholder Text To A Text Field',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/add-placeholder-text-to-a-text-field',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Html And Html5',
    name: 'Create A Form Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-a-form-element',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Html And Html5',
    name: 'Add A Submit Button To A Form',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/add-a-submit-button-to-a-form',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Html And Html5',
    name: 'Use Html5 To Require A Field',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/use-html5-to-require-a-field',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Html And Html5',
    name: 'Create A Set Of Radio Buttons',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-a-set-of-radio-buttons',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Html And Html5',
    name: 'Create A Set Of Checkboxes',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-a-set-of-checkboxes',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Html And Html5',
    name: 'Use The Value Attribute With Radio Buttons And Checkboxes',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/use-the-value-attribute-with-radio-buttons-and-checkboxes',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Html And Html5',
    name: 'Check Radio Buttons And Checkboxes By Default',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/check-radio-buttons-and-checkboxes-by-default',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Html And Html5',
    name: 'Nest Many Elements Within A Single Div Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/nest-many-elements-within-a-single-div-element',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Html And Html5',
    name: 'Declare The Doctype Of An Html Document',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/declare-the-doctype-of-an-html-document',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Html And Html5',
    name: 'Define The Head And Body Of An Html Document',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/define-the-head-and-body-of-an-html-document',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Change The Color Of Text',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/change-the-color-of-text',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Use Css Selectors To Style Elements',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-css-selectors-to-style-elements',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Use A Css Class To Style An Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-a-css-class-to-style-an-element',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Style Multiple Elements With A Css Class',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/style-multiple-elements-with-a-css-class',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Change The Font Size Of An Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/change-the-font-size-of-an-element',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Set The Font Family Of An Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/set-the-font-family-of-an-element',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Import A Google Font',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/import-a-google-font',
    remove: ['ALL_HELPERS'],
    add: [
      '<pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://fonts.googleapis.com/css?family=Lobster<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span></code></pre>',
    ],
  },
  {
    section: 'Basic Css',
    name: 'Specify How Fonts Should Degrade',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/specify-how-fonts-should-degrade',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Size Your Images',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/size-your-images',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Add Borders Around Your Elements',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/add-borders-around-your-elements',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Add Rounded Corners With Border Radius',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/add-rounded-corners-with-border-radius',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Make Circular Images With A Border Radius',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/make-circular-images-with-a-border-radius',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Give A Background Color To A Div Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/give-a-background-color-to-a-div-element',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Set The Id Of An Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/set-the-id-of-an-element',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Use An Id Attribute To Style An Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-an-id-attribute-to-style-an-element',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Adjust The Padding Of An Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/adjust-the-padding-of-an-element',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Adjust The Margin Of An Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/adjust-the-margin-of-an-element',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Add A Negative Margin To An Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/add-a-negative-margin-to-an-element',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Add Different Padding To Each Side Of An Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/add-different-padding-to-each-side-of-an-element',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Add Different Margins To Each Side Of An Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/add-different-margins-to-each-side-of-an-element',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Use Clockwise Notation To Specify The Padding Of An Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-clockwise-notation-to-specify-the-padding-of-an-element',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Use Clockwise Notation To Specify The Margin Of An Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-clockwise-notation-to-specify-the-margin-of-an-element',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Use Attribute Selectors To Style Elements',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-attribute-selectors-to-style-elements',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Understand Absolute Versus Relative Units',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/understand-absolute-versus-relative-units',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Style The Html Body Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/style-the-html-body-element',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Inherit Styles From The Body Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/inherit-styles-from-the-body-element',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Prioritize One Style Over Another',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/prioritize-one-style-over-another',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Override Styles In Subsequent Css',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/override-styles-in-subsequent-css',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Override Class Declarations By Styling Id Attributes',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/override-class-declarations-by-styling-id-attributes',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Override Class Declarations With Inline Styles',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/override-class-declarations-with-inline-styles',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Override All Other Styles By Using Important',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/override-all-other-styles-by-using-important',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Use Hex Code For Specific Colors',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-hex-code-for-specific-colors',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Use Hex Code To Mix Colors',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-hex-code-to-mix-colors',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Use Abbreviated Hex Code',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-abbreviated-hex-code',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Use Rgb Values To Color Elements',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-rgb-values-to-color-elements',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Use Rgb To Mix Colors',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-rgb-to-mix-colors',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Use Css Variables To Change Several Elements At Once',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-css-variables-to-change-several-elements-at-once',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Create A Custom Css Variable',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/create-a-custom-css-variable',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Use A Custom Css Variable',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-a-custom-css-variable',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Attach A Fallback Value To A Css Variable',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/attach-a-fallback-value-to-a-css-variable',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Improve Compatibility With Browser Fallbacks',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/improve-compatibility-with-browser-fallbacks',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Inherit Css Variables',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/inherit-css-variables',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Change A Variable For A Specific Area',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/change-a-variable-for-a-specific-area',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Basic Css',
    name: 'Use A Media Query To Change A Variable',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-a-media-query-to-change-a-variable',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Create Visual Balance Using The Text Align Property',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/create-visual-balance-using-the-text-align-property',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Adjust The Width Of An Element Using The Width Property',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/adjust-the-width-of-an-element-using-the-width-property',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Adjust The Height Of An Element Using The Height Property',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/adjust-the-height-of-an-element-using-the-height-property',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Use The Strong Tag To Make Text Bold',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-the-strong-tag-to-make-text-bold',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Use The U Tag To Underline Text',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-the-u-tag-to-underline-text',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Use The Em Tag To Italicize Text',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-the-em-tag-to-italicize-text',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Use The S Tag To Strikethrough Text',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-the-s-tag-to-strikethrough-text',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Create A Horizontal Line Using The Hr Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/create-a-horizontal-line-using-the-hr-element',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Adjust The Background Color Property Of Text',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/adjust-the-background-color-property-of-text',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Adjust The Size Of A Heading Element Versus A Paragraph Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/adjust-the-size-of-a-heading-element-versus-a-paragraph-element',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Add A Box Shadow To A Card Like Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/add-a-box-shadow-to-a-card-like-element',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Decrease The Opacity Of An Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/decrease-the-opacity-of-an-element',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Use The Text Transform Property To Make Text Uppercase',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-the-text-transform-property-to-make-text-uppercase',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Set The Font Size For Multiple Heading Elements',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/set-the-font-size-for-multiple-heading-elements',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Set The Font Weight For Multiple Heading Elements',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/set-the-font-weight-for-multiple-heading-elements',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Set The Font Size Of Paragraph Text',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/set-the-font-size-of-paragraph-text',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Set The Line Height Of Paragraphs',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/set-the-line-height-of-paragraphs',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Adjust The Hover State Of An Anchor Tag',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/adjust-the-hover-state-of-an-anchor-tag',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Change An Elements Relative Position',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/change-an-elements-relative-position',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Move A Relatively Positioned Element With Css Offsets',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/move-a-relatively-positioned-element-with-css-offsets',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Lock An Element To Its Parent With Absolute Positioning',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/lock-an-element-to-its-parent-with-absolute-positioning',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Lock An Element To The Browser Window With Fixed Positioning',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/lock-an-element-to-the-browser-window-with-fixed-positioning',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Push Elements Left Or Right With The Float Property',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/push-elements-left-or-right-with-the-float-property',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Change The Position Of Overlapping Elements With The Z Index Property',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/change-the-position-of-overlapping-elements-with-the-z-index-property',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Center An Element Horizontally Using The Margin Property',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/center-an-element-horizontally-using-the-margin-property',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Learn About Complementary Colors',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/learn-about-complementary-colors',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Learn About Tertiary Colors',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/learn-about-tertiary-colors',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Adjust The Color Of Various Elements To Complementary Colors',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/adjust-the-color-of-various-elements-to-complementary-colors',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Adjust The Hue Of A Color',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/adjust-the-hue-of-a-color',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Adjust The Tone Of A Color',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/adjust-the-tone-of-a-color',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Create A Gradual Css Linear Gradient',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/create-a-gradual-css-linear-gradient',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Use A Css Linear Gradient To Create A Striped Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-a-css-linear-gradient-to-create-a-striped-element',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Create Texture By Adding A Subtle Pattern As A Background Image',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/create-texture-by-adding-a-subtle-pattern-as-a-background-image',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Use The Css Transform Scale Property To Change The Size Of An Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-the-css-transform-scale-property-to-change-the-size-of-an-element',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Use The Css Transform Scale Property To Scale An Element On Hover',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-the-css-transform-scale-property-to-scale-an-element-on-hover',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Use The Css Transform Property Skewx To Skew An Element Along The X Axis',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-the-css-transform-property-skewx-to-skew-an-element-along-the-x-axis',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Use The Css Transform Property Skewy To Skew An Element Along The Y Axis',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-the-css-transform-property-skewy-to-skew-an-element-along-the-y-axis',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Create A Graphic Using Css',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/create-a-graphic-using-css',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Create A More Complex Shape Using Css And Html',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/create-a-more-complex-shape-using-css-and-html',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Learn How The Css Keyframes And Animation Properties Work',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/learn-how-the-css-keyframes-and-animation-properties-work',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Use Css Animation To Change The Hover State Of A Button',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-css-animation-to-change-the-hover-state-of-a-button',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Modify Fill Mode Of An Animation',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/modify-fill-mode-of-an-animation',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Create Movement Using Css Animation',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/create-movement-using-css-animation',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Create Visual Direction By Fading An Element From Left To Right',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/create-visual-direction-by-fading-an-element-from-left-to-right',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Animate Elements Continually Using An Infinite Animation Count',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/animate-elements-continually-using-an-infinite-animation-count',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Make A Css Heartbeat Using An Infinite Animation Count',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/make-a-css-heartbeat-using-an-infinite-animation-count',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Animate Elements At Variable Rates',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/animate-elements-at-variable-rates',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Animate Multiple Elements At Variable Rates',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/animate-multiple-elements-at-variable-rates',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Change Animation Timing With Keywords',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/change-animation-timing-with-keywords',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Learn How Bezier Curves Work',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/learn-how-bezier-curves-work',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Use A Bezier Curve To Move A Graphic',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-a-bezier-curve-to-move-a-graphic',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Visual Design',
    name: 'Make Motion More Natural Using A Bezier Curve',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/make-motion-more-natural-using-a-bezier-curve',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Accessibility',
    name: 'Add A Text Alternative To Images For Visually Impaired Accessibility',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/add-a-text-alternative-to-images-for-visually-impaired-accessibility',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Accessibility',
    name: 'Know When Alt Text Should Be Left Blank',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/know-when-alt-text-should-be-left-blank',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Accessibility',
    name: 'Use Headings To Show Hierarchical Relationships Of Content',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/use-headings-to-show-hierarchical-relationships-of-content',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Accessibility',
    name: 'Jump Straight To The Content Using The Main Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/jump-straight-to-the-content-using-the-main-element',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Accessibility',
    name: 'Wrap Content In The Article Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/wrap-content-in-the-article-element',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Accessibility',
    name: 'Make Screen Reader Navigation Easier With The Header Landmark',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/make-screen-reader-navigation-easier-with-the-header-landmark',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Accessibility',
    name: 'Make Screen Reader Navigation Easier With The Nav Landmark',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/make-screen-reader-navigation-easier-with-the-nav-landmark',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Accessibility',
    name: 'Make Screen Reader Navigation Easier With The Footer Landmark',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/make-screen-reader-navigation-easier-with-the-footer-landmark',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Accessibility',
    name: 'Improve Accessibility Of Audio Content With The Audio Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/improve-accessibility-of-audio-content-with-the-audio-element',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Accessibility',
    name: 'Improve Chart Accessibility With The Figure Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/improve-chart-accessibility-with-the-figure-element',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Accessibility',
    name: 'Improve Form Field Accessibility With The Label Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/improve-form-field-accessibility-with-the-label-element',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Accessibility',
    name: 'Wrap Radio Buttons In A Fieldset Element For Better Accessibility',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/wrap-radio-buttons-in-a-fieldset-element-for-better-accessibility',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Accessibility',
    name: 'Add An Accessible Date Picker',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/add-an-accessible-date-picker',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Accessibility',
    name: 'Standardize Times With The Html5 Datetime Attribute',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/standardize-times-with-the-html5-datetime-attribute',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Accessibility',
    name: 'Make Elements Only Visible To A Screen Reader By Using Custom Css',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/make-elements-only-visible-to-a-screen-reader-by-using-custom-css',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Accessibility',
    name: 'Improve Readability With High Contrast Text',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/improve-readability-with-high-contrast-text',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Accessibility',
    name: 'Avoid Colorblindness Issues By Using Sufficient Contrast',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/avoid-colorblindness-issues-by-using-sufficient-contrast',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Accessibility',
    name: 'Avoid Colorblindness Issues By Carefully Choosing Colors That Convey Information',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/avoid-colorblindness-issues-by-carefully-choosing-colors-that-convey-information',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Accessibility',
    name: 'Give Links Meaning By Using Descriptive Link Text',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/give-links-meaning-by-using-descriptive-link-text',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Accessibility',
    name: 'Make Links Navigable With Html Access Keys',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/make-links-navigable-with-html-access-keys',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Accessibility',
    name: 'Use Tabindex To Add Keyboard Focus To An Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/use-tabindex-to-add-keyboard-focus-to-an-element',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Applied Accessibility',
    name: 'Use Tabindex To Specify The Order Of Keyboard Focus For Several Elements',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/use-tabindex-to-specify-the-order-of-keyboard-focus-for-several-elements',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Responsive Web Design Principles',
    name: 'Create A Media Query',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-principles/create-a-media-query',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Responsive Web Design Principles',
    name: 'Make An Image Responsive',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-principles/make-an-image-responsive',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Responsive Web Design Principles',
    name: 'Use A Retina Image For Higher Resolution Displays',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-principles/use-a-retina-image-for-higher-resolution-displays',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Responsive Web Design Principles',
    name: 'Make Typography Responsive',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-principles/make-typography-responsive',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Flexbox',
    name: 'Use Display Flex To Position Two Boxes',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-display-flex-to-position-two-boxes',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Flexbox',
    name: 'Add Flex Superpowers To The Tweet Embed',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/add-flex-superpowers-to-the-tweet-embed',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Flexbox',
    name: 'Use The Flex Direction Property To Make A Row',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-the-flex-direction-property-to-make-a-row',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Flexbox',
    name: 'Apply The Flex Direction Property To Create Rows In The Tweet Embed',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/apply-the-flex-direction-property-to-create-rows-in-the-tweet-embed',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Flexbox',
    name: 'Use The Flex Direction Property To Make A Column',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-the-flex-direction-property-to-make-a-column',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Flexbox',
    name: 'Apply The Flex Direction Property To Create A Column In The Tweet Embed',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/apply-the-flex-direction-property-to-create-a-column-in-the-tweet-embed',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Flexbox',
    name: 'Align Elements Using The Justify Content Property',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/align-elements-using-the-justify-content-property',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Flexbox',
    name: 'Use The Justify Content Property In The Tweet Embed',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-the-justify-content-property-in-the-tweet-embed',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Flexbox',
    name: 'Align Elements Using The Align Items Property',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/align-elements-using-the-align-items-property',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Flexbox',
    name: 'Use The Align Items Property In The Tweet Embed',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-the-align-items-property-in-the-tweet-embed',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Flexbox',
    name: 'Use The Flex Wrap Property To Wrap A Row Or Column',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-the-flex-wrap-property-to-wrap-a-row-or-column',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Flexbox',
    name: 'Use The Flex Shrink Property To Shrink Items',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-the-flex-shrink-property-to-shrink-items',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Flexbox',
    name: 'Use The Flex Grow Property To Expand Items',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-the-flex-grow-property-to-expand-items',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Flexbox',
    name: 'Use The Flex Basis Property To Set The Initial Size Of An Item',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-the-flex-basis-property-to-set-the-initial-size-of-an-item',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Flexbox',
    name: 'Use The Flex Shorthand Property',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-the-flex-shorthand-property',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Flexbox',
    name: 'Use The Order Property To Rearrange Items',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-the-order-property-to-rearrange-items',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Flexbox',
    name: 'Use The Align Self Property',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-the-align-self-property',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Grid',
    name: 'Create Your First Css Grid',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/create-your-first-css-grid',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Grid',
    name: 'Add Columns With Grid Template Columns',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/add-columns-with-grid-template-columns',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Grid',
    name: 'Add Rows With Grid Template Rows',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/add-rows-with-grid-template-rows',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Grid',
    name: 'Use Css Grid Units To Change The Size Of Columns And Rows',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/use-css-grid-units-to-change-the-size-of-columns-and-rows',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Grid',
    name: 'Create A Column Gap Using Grid Column Gap',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/create-a-column-gap-using-grid-column-gap',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Grid',
    name: 'Create A Row Gap Using Grid Row Gap',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/create-a-row-gap-using-grid-row-gap',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Grid',
    name: 'Add Gaps Faster With Grid Gap',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/add-gaps-faster-with-grid-gap',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Grid',
    name: 'Use Grid Column To Control Spacing',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/use-grid-column-to-control-spacing',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Grid',
    name: 'Use Grid Row To Control Spacing',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/use-grid-row-to-control-spacing',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Grid',
    name: 'Align An Item Horizontally Using Justify Self',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/align-an-item-horizontally-using-justify-self',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Grid',
    name: 'Align An Item Vertically Using Align Self',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/align-an-item-vertically-using-align-self',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Grid',
    name: 'Align All Items Horizontally Using Justify Items',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/align-all-items-horizontally-using-justify-items',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Grid',
    name: 'Align All Items Vertically Using Align Items',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/align-all-items-vertically-using-align-items',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Grid',
    name: 'Divide The Grid Into An Area Template',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/divide-the-grid-into-an-area-template',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Grid',
    name: 'Place Items In Grid Areas Using The Grid Area Property',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/place-items-in-grid-areas-using-the-grid-area-property',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Grid',
    name: 'Use Grid Area Without Creating An Areas Template',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/use-grid-area-without-creating-an-areas-template',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Grid',
    name: 'Reduce Repetition Using The Repeat Function',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/reduce-repetition-using-the-repeat-function',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Grid',
    name: 'Limit Item Size Using The Minmax Function',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/limit-item-size-using-the-minmax-function',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Grid',
    name: 'Create Flexible Layouts Using Auto Fill',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/create-flexible-layouts-using-auto-fill',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Grid',
    name: 'Create Flexible Layouts Using Auto Fit',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/create-flexible-layouts-using-auto-fit',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Grid',
    name: 'Use Media Queries To Create Responsive Layouts',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/use-media-queries-to-create-responsive-layouts',
    remove: ['ALL_HELPERS'],
  },
  {
    section: 'Css Grid',
    name: 'Create Grids Within Grids',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/create-grids-within-grids',
    remove: ['ALL_HELPERS'],
  },
];

function executeScript(script, params) {
  chrome.tabs.executeScript({
    code: '(' + script + ')(' + params + ');', //argument here is a string but function.toString() returns function's code
  });
}

function clearBreadcrumbTitle() {
  const breadcrumbTitle = document.querySelector(
    '.challenge-title-breadcrumbs'
  );

  breadcrumbTitle?.remove();
}

function clearDescription() {
  const description = document.querySelector('#description');

  while (description?.firstChild) {
    description.removeChild(description.lastChild);
  }
}

function clearHelpButton() {
  const getHelpButton = document.querySelector('#get-help-dropdown');

  getHelpButton?.remove();
}

function clearTestCases() {
  const testCases = document.querySelector('.challenge-test-suite');

  testCases?.remove();
}

function clearTestOutput() {
  const output = document.querySelectorAll('.horizontal.reflex-element');

  output[2]?.remove();
}

function clearAllHelpers() {
  const breadcrumbTitle = document.querySelector(
    '.challenge-title-breadcrumbs'
  );
  const description = document.querySelector('#description');
  const getHelpButton = document.querySelector('#get-help-dropdown');
  const testCases = document.querySelector('.challenge-test-suite');
  const output = document.querySelectorAll('.horizontal.reflex-element');

  breadcrumbTitle?.remove();
  while (description?.firstChild) {
    description.removeChild(description.lastChild);
  }
  getHelpButton?.remove();
  testCases?.remove();
  output[2]?.remove();
}

function addElement(element) {
  console.log(element);
  const description = document.querySelector('#description');
  if (description) description.innerHTML = element;
}

function removeElements(challenge) {
  if (challenge.remove)
    challenge.remove.forEach((element) => {
      switch (element) {
        case CONSTANTS.ALL_HELPERS:
          executeScript(clearAllHelpers);
          break;
        case CONSTANTS.BREADCRUMB_TITLE:
          executeScript(clearBreadcrumbTitle);
          break;
        case CONSTANTS.DESCRIPTION:
          executeScript(clearDescription);
          break;
        case CONSTANTS.GET_HELP_BUTTON:
          executeScript(clearHelpButton);
          break;
        case CONSTANTS.TEST_CASES:
          executeScript(clearTestCases);
          break;
        case CONSTANTS.TEST_OUTPUT:
          executeScript(clearTestOutput);
          break;
        default:
          executeScript(clearAllHelpers);
          break;
      }
    });
}

function addElements(challenge) {
  if (challenge.add) {
    challenge.add.forEach((element) => {
      console.log(element);
      executeScript(addElement, "'" + element + "'");
    });
  }
}

function clearHelpers(challenge) {
  removeElements(challenge);
  addElements(challenge);
}

function isURLWhitelisted(url) {
  if (!url) return false;

  for (let i = 0; i < responsiveWebDesignChallenges.length; i++) {
    if (url.startsWith(responsiveWebDesignChallenges[i].url)) return true;
  }

  return false;
}

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  chrome.storage.local.get('challengeIndex', function (items) {
    chrome.storage.local.get('fccUtilityOn', function (_items) {
      const switchOn = _items.fccUtilityOn;
      chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        if (!switchOn) return;
        if (isURLWhitelisted(tabs[0]?.url)) {
          if (
            tabs[0]?.url.startsWith(
              responsiveWebDesignChallenges[items.challengeIndex].url
            )
          )
            clearHelpers(responsiveWebDesignChallenges[items.challengeIndex]);
          else if (
            tabs[0]?.url.startsWith(
              responsiveWebDesignChallenges[items.challengeIndex + 1].url
            )
          ) {
            clearHelpers(
              responsiveWebDesignChallenges[items.challengeIndex + 1]
            );
            chrome.storage.local.set({
              challengeIndex: items.challengeIndex + 1,
            });
          } else {
            chrome.tabs.update({
              url: responsiveWebDesignChallenges[items.challengeIndex].url,
            });
            clearHelpers(responsiveWebDesignChallenges[items.challengeIndex]);
          }
        } else {
          chrome.tabs.update({
            url: responsiveWebDesignChallenges[items.challengeIndex].url,
          });
          clearHelpers(responsiveWebDesignChallenges[items.challengeIndex]);
        }
      });
    });
  });
});

(function () {
  chrome.storage.local.set({ challengeIndex: 0 });
  chrome.storage.local.set({ fccUtilityOn: false });
})();
