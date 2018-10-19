/*------------------------------------*\
    #TABS
\*------------------------------------*/
/**
 * Tabs Activation
 * 1) Add active class to the first tab and panel by default
 * 2) Add active class to first js-tabs-list__item (used in code tabs in styleguide)
 * 3) On click of tab, prevent page jumping and run openTab function
 */

(function(){

	var tabContainer = document.querySelectorAll('.js-tabs');
	var tabBtn = document.querySelectorAll('.js-tab');
	var tabContent = document.querySelectorAll('.js-tabs-panel');
	var tabsList = document.querySelectorAll('.c-tabs-list');

	for (i=0; i<tabContainer.length; i++) {
		var tabFirst = tabContainer[i].querySelector('.js-tab:first-child'); /* 1 */
		var tabPanelFirst = tabContainer[i].querySelector('.js-tabs-panel:first-child'); /* 1 */
		tabFirst.classList.add('is-active'); /* 1 */
		tabPanelFirst.classList.add('is-active'); /* 1 */
	}

	for (i=0; i<tabsList.length; i++) {
		var tabsListItem = tabsList[i].querySelector('.js-tabs-list-item:first-child'); /* 2 */
		tabsListItem.classList.add('is-active'); /* 2 */
	}

	for (i=0; i<tabBtn.length; i++) {
		tabBtn[i].addEventListener('click', function (e) { /* 3 */
			e.preventDefault();/* 3 */
			openTab(this);/* 3 */
		});
	}

	/**
	 * Open Tab function
	 * 1) Pass in clicked tab into function as el
	 * 2) Get href of the clicked tab. Also get the data-code-tabs attribute.
	 *    These are used to show and hide proper tab panel or tabs-list__items
	 *    when the correlating variation is clicked on
	 * 3) Remove active class from all tabs on click (click event above).
	 *    Add active class to clicked tab.
	 * 4) Select this tab's href and create new Href. If tab href exists on click,
	 *    add active class to the tab.
	 * 5) Select all tabs panels. On click remove all active classes from panels.
	 *    Add class to panel associated with tab clicked on.
	 * 6) For all tabs lists (list of code block tabs on styleguide), select all
	 *    tab list items. If data-code-tabs matches between variation tab
	 *    clicked and tabs list item, remove active classes from all tab list
	 *    items and add active class to item with same data-code-tabs value.
	 * 7) Add active class to tab whose href matches the correct tabs panel.
	 */
	function openTab(el) { /* 1 */
		thisHref = el.getAttribute('href'); /* 2 */
		thisData = el.getAttribute('data-code-tabs');/* 2 */

		var tabParent = el.parentNode.parentNode.parentNode;
		var tabBtns = tabParent.querySelectorAll('.js-tab');

		for (j=0; j<tabBtns.length; j++) {
			tabBtns[j].classList.remove('is-active'); /* 3 */
		}

		el.classList.add('is-active'); /* 3 */

		var newHref = document.querySelector(thisHref); /* 4 */
		var newerHref = newHref.querySelector('.js-tabs-panel');
		var firstLink = newHref.querySelector('.js-tab'); /* 4 */
		if (firstLink) {
			firstLink.classList.add('is-active'); /* 4 */
		}

		var tabsPanel = tabParent.querySelectorAll('.js-tabs-panel');
		for (j=0; j<tabsPanel.length; j++) {
			tabsPanel[j].classList.remove('is-active'); /* 5 */
			if (newerHref) {
				newerHref.classList.add('is-active'); /* 5 */
			}
		}

		var tabsList = document.querySelectorAll('.js-tabs-list');
		for (k=0; k<tabsList.length; k++) { /* 6 */
			var tabsListItem = tabsList[k].querySelectorAll('.js-tabs-list-item'); /* 6 */
			for (l=0; l<tabsListItem.length; l++) {
				if (el.getAttribute('data-code-tabs') == tabsListItem[l].getAttribute('data-code-tabs')) { /* 6 */
					var tabsItems = tabsList[k].querySelectorAll('.js-tabs-list-item');
					for (m=0; m<tabsItems.length; m++) {
						tabsItems[m].classList.remove('is-active');/* 6 */
					}
					tabsListItem[l].classList.add('is-active');/* 6 */
				}
			}
		}

		document.querySelector(thisHref).classList.add('is-active'); /* 7 */
	}

})();
