/*jshint -W099 */
/*jslint browser: true, sub: true */

// GLOBALS
// =============================================
var pymChild = new pym.Child();

// HELPERS
// =============================================
function goodGuess(container) {
	container.addClass("viz-choice-correct");
	container.siblings(".viz-choice").addClass("viz-choice-incorrect viz-choice-disabled");
	container.find(".viz-answer").slideDown(200);
	pymChild.sendHeightToParent();
}

function badGuess(container) {
	container.addClass("viz-choice-incorrect");
}


// HANDLERS
// =============================================

$(".viz-choice").on("click", function() {
	var $this = $(this);

	if ($this.find(".viz-choice-copy").data("correct") === true) {
		goodGuess($this);
	} else {
		badGuess($this);
	}
});

// Make sure height is correct on load
// =============================================
pymChild.sendHeightToParent();