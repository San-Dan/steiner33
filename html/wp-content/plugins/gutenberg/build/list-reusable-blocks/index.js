/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: external ["wp","element"]
var external_wp_element_namespaceObject = window["wp"]["element"];
;// CONCATENATED MODULE: external ["wp","i18n"]
var external_wp_i18n_namespaceObject = window["wp"]["i18n"];
;// CONCATENATED MODULE: external "lodash"
var external_lodash_namespaceObject = window["lodash"];
;// CONCATENATED MODULE: external ["wp","apiFetch"]
var external_wp_apiFetch_namespaceObject = window["wp"]["apiFetch"];
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_namespaceObject);
;// CONCATENATED MODULE: ./packages/list-reusable-blocks/build-module/utils/file.js
/**
 * Downloads a file.
 *
 * @param {string} fileName    File Name.
 * @param {string} content     File Content.
 * @param {string} contentType File mime type.
 */
function download(fileName, content, contentType) {
  const file = new window.Blob([content], {
    type: contentType
  }); // IE11 can't use the click to download technique
  // we use a specific IE11 technique instead.

  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(file, fileName);
  } else {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
/**
 * Reads the textual content of the given file.
 *
 * @param {File} file File.
 * @return {Promise<string>}  Content of the file.
 */

function readTextFile(file) {
  const reader = new window.FileReader();
  return new Promise(resolve => {
    reader.onload = () => {
      resolve(reader.result);
    };

    reader.readAsText(file);
  });
}
//# sourceMappingURL=file.js.map
;// CONCATENATED MODULE: ./packages/list-reusable-blocks/build-module/utils/export.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Export a reusable block as a JSON file.
 *
 * @param {number} id
 */

async function exportReusableBlock(id) {
  const postType = await external_wp_apiFetch_default()({
    path: `/wp/v2/types/wp_block`
  });
  const post = await external_wp_apiFetch_default()({
    path: `/wp/v2/${postType.rest_base}/${id}?context=edit`
  });
  const title = post.title.raw;
  const content = post.content.raw;
  const fileContent = JSON.stringify({
    __file: 'wp_block',
    title,
    content
  }, null, 2);
  const fileName = (0,external_lodash_namespaceObject.kebabCase)(title) + '.json';
  download(fileName, fileContent, 'application/json');
}

/* harmony default export */ var utils_export = (exportReusableBlock);
//# sourceMappingURL=export.js.map
;// CONCATENATED MODULE: external ["wp","components"]
var external_wp_components_namespaceObject = window["wp"]["components"];
;// CONCATENATED MODULE: external ["wp","compose"]
var external_wp_compose_namespaceObject = window["wp"]["compose"];
;// CONCATENATED MODULE: ./packages/list-reusable-blocks/build-module/utils/import.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Import a reusable block from a JSON file.
 *
 * @param {File} file File.
 * @return {Promise} Promise returning the imported reusable block.
 */

async function importReusableBlock(file) {
  const fileContent = await readTextFile(file);
  let parsedContent;

  try {
    parsedContent = JSON.parse(fileContent);
  } catch (e) {
    throw new Error('Invalid JSON file');
  }

  if (parsedContent.__file !== 'wp_block' || !parsedContent.title || !parsedContent.content || !(0,external_lodash_namespaceObject.isString)(parsedContent.title) || !(0,external_lodash_namespaceObject.isString)(parsedContent.content)) {
    throw new Error('Invalid Reusable block JSON file');
  }

  const postType = await external_wp_apiFetch_default()({
    path: `/wp/v2/types/wp_block`
  });
  const reusableBlock = await external_wp_apiFetch_default()({
    path: `/wp/v2/${postType.rest_base}`,
    data: {
      title: parsedContent.title,
      content: parsedContent.content,
      status: 'publish'
    },
    method: 'POST'
  });
  return reusableBlock;
}

/* harmony default export */ var utils_import = (importReusableBlock);
//# sourceMappingURL=import.js.map
;// CONCATENATED MODULE: ./packages/list-reusable-blocks/build-module/components/import-form/index.js


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



class ImportForm extends external_wp_element_namespaceObject.Component {
  constructor() {
    super(...arguments);
    this.state = {
      isLoading: false,
      error: null,
      file: null
    };
    this.isStillMounted = true;
    this.onChangeFile = this.onChangeFile.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillUnmount() {
    this.isStillMounted = false;
  }

  onChangeFile(event) {
    this.setState({
      file: event.target.files[0],
      error: null
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const {
      file
    } = this.state;
    const {
      onUpload
    } = this.props;

    if (!file) {
      return;
    }

    this.setState({
      isLoading: true
    });
    utils_import(file).then(reusableBlock => {
      if (!this.isStillMounted) {
        return;
      }

      this.setState({
        isLoading: false
      });
      onUpload(reusableBlock);
    }).catch(error => {
      if (!this.isStillMounted) {
        return;
      }

      let uiMessage;

      switch (error.message) {
        case 'Invalid JSON file':
          uiMessage = (0,external_wp_i18n_namespaceObject.__)('Invalid JSON file');
          break;

        case 'Invalid Reusable block JSON file':
          uiMessage = (0,external_wp_i18n_namespaceObject.__)('Invalid Reusable block JSON file');
          break;

        default:
          uiMessage = (0,external_wp_i18n_namespaceObject.__)('Unknown error');
      }

      this.setState({
        isLoading: false,
        error: uiMessage
      });
    });
  }

  onDismissError() {
    this.setState({
      error: null
    });
  }

  render() {
    const {
      instanceId
    } = this.props;
    const {
      file,
      isLoading,
      error
    } = this.state;
    const inputId = 'list-reusable-blocks-import-form-' + instanceId;
    return (0,external_wp_element_namespaceObject.createElement)("form", {
      className: "list-reusable-blocks-import-form",
      onSubmit: this.onSubmit
    }, error && (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Notice, {
      status: "error",
      onRemove: () => this.onDismissError()
    }, error), (0,external_wp_element_namespaceObject.createElement)("label", {
      htmlFor: inputId,
      className: "list-reusable-blocks-import-form__label"
    }, (0,external_wp_i18n_namespaceObject.__)('File')), (0,external_wp_element_namespaceObject.createElement)("input", {
      id: inputId,
      type: "file",
      onChange: this.onChangeFile
    }), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
      type: "submit",
      isBusy: isLoading,
      disabled: !file || isLoading,
      variant: "secondary",
      className: "list-reusable-blocks-import-form__button"
    }, (0,external_wp_i18n_namespaceObject._x)('Import', 'button label')));
  }

}

/* harmony default export */ var import_form = ((0,external_wp_compose_namespaceObject.withInstanceId)(ImportForm));
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./packages/list-reusable-blocks/build-module/components/import-dropdown/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



function ImportDropdown({
  onUpload
}) {
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Dropdown, {
    position: "bottom right",
    contentClassName: "list-reusable-blocks-import-dropdown__content",
    renderToggle: ({
      isOpen,
      onToggle
    }) => (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
      "aria-expanded": isOpen,
      onClick: onToggle,
      variant: "primary"
    }, (0,external_wp_i18n_namespaceObject.__)('Import from JSON')),
    renderContent: ({
      onClose
    }) => (0,external_wp_element_namespaceObject.createElement)(import_form, {
      onUpload: (0,external_lodash_namespaceObject.flow)(onClose, onUpload)
    })
  });
}

/* harmony default export */ var import_dropdown = (ImportDropdown);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./packages/list-reusable-blocks/build-module/index.js


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


 // Setup Export Links

document.body.addEventListener('click', event => {
  if (!event.target.classList.contains('wp-list-reusable-blocks__export')) {
    return;
  }

  event.preventDefault();
  utils_export(event.target.dataset.id);
}); // Setup Import Form

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.page-title-action');

  if (!button) {
    return;
  }

  const showNotice = () => {
    const notice = document.createElement('div');
    notice.className = 'notice notice-success is-dismissible';
    notice.innerHTML = `<p>${(0,external_wp_i18n_namespaceObject.__)('Reusable block imported successfully!')}</p>`;
    const headerEnd = document.querySelector('.wp-header-end');

    if (!headerEnd) {
      return;
    }

    headerEnd.parentNode.insertBefore(notice, headerEnd);
  };

  const container = document.createElement('div');
  container.className = 'list-reusable-blocks__container';
  button.parentNode.insertBefore(container, button);
  (0,external_wp_element_namespaceObject.render)((0,external_wp_element_namespaceObject.createElement)(import_dropdown, {
    onUpload: showNotice
  }), container);
});
//# sourceMappingURL=index.js.map
(window.wp = window.wp || {}).listReusableBlocks = __webpack_exports__;
/******/ })()
;