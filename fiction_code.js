// photos from flickr with creative commons license

var cy = cytoscape({
  container: document.getElementById('cy'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'height': 80,
        'width': 80,
        'background-fit': 'cover',
        'border-color': '#17029F',
        'border-width': 6,
        'border-opacity': 1
      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'width': 9,
        'target-arrow-shape': 'triangle',
        'line-color': '#05F045',
        'target-arrow-color': '#05F045'
      })
    .selector('#Science-Fiction')
      .css({
        'background-image': '/assets/img/sf_logo.jpg',
        
      })
    .selector('#role_1')
      .css({
        'background-image': '/assets/img/one.png'
      })
    
  .selector('#role_2')
      .css({
        'background-image': '/assets/img/two.png'
      })
  .selector('#role_3')
      .css({
        'background-image': '/assets/img/three.png'
      })
  .selector('#role_4')
      .css({
        'background-image': '/assets/img/four.png'
      })
  .selector('#actor_1')
      .css({
        'background-image': '/assets/img/actors/fiction/katheryn_winnick.jpeg'
      })
  .selector('#actor_2')
      .css({
        'background-image': '/assets/img/actors/fiction/anna_torv.jpeg'
      })
  .selector('#actor_4')
      .css({
        'background-image': '/assets/img/actors/fiction/jay_hernandez.webp'
      })
  .selector('#actor_5')
      .css({
        'background-image': '/assets/img/actors/fiction/john_cena.jpeg'
      })
  .selector('#actor_7')
      .css({
        'background-image': '/assets/img/actors/fiction/sissy_spacek.webp'
      })
  .selector('#actor_8')
      .css({
        'background-image': '/assets/img/actors/fiction/jessica_lange.jpeg'
      })
  .selector('#actor_10')
      .css({
        'background-image': '/assets/img/actors/fiction/hailee_steinfeld.jpeg'
      })
  .selector('#actor_11')
      .css({
        'background-image': '/assets/img/actors/fiction/madison_iseman.jpeg'
      })
  .selector('#director')
      .css({
        'background-image': '/assets/img/directors/director_chair.png'
      })
  .selector('#director_1')
      .css({
        'background-image': '/assets/img/directors/ridley_scott.jpeg'
      })
  .selector('#director_2')
      .css({
        'background-image': '/assets/img/directors/martha_coolidge.jpeg'
      }),
   

  elements: {
    nodes: [
      
      { data: { id: 'Science-Fiction' } },
      { data: { id: 'role_1' } },
      { data: { id: 'role_2' } },
      { data: { id: 'role_3' } },
      { data: { id: 'role_4' } },
      { data: { id: 'director' } },
      { data: { id: 'actor_1' } },
      { data: { id: 'actor_2' } },
      //{ data: { id: 'actor_3' } },
      { data: { id: 'actor_4' } },
      { data: { id: 'actor_5' } },
      //{ data: { id: 'actor_6' } },
      { data: { id: 'actor_7' } },
      { data: { id: 'actor_8' } },
      //{ data: { id: 'actor_9' } },
      { data: { id: 'actor_10' } },
      { data: { id: 'actor_11' } },
      //{ data: { id: 'actor_12' } },
      { data: { id: 'director_1' } },
      { data: { id: 'director_2' } },
    ],
    edges: [
      
      { data: { source: 'Science-Fiction', target: 'role_1' } },
      { data: { source: 'Science-Fiction', target: 'role_2' } },
      { data: { source: 'Science-Fiction', target: 'role_3' } },
      { data: { source: 'Science-Fiction', target: 'role_4' } },
      { data: { source: 'Science-Fiction', target: 'director' } },
      { data: { source: 'director', target: 'director_1' } },
      { data: { source: 'director', target: 'director_2' } },
      { data: { source: 'role_1', target: 'actor_1' } },
      { data: { source: 'role_1', target: 'actor_2' } },
      //{ data: { source: 'role_1', target: 'actor_3' } },
      { data: { source: 'role_2', target: 'actor_4' } },
      { data: { source: 'role_2', target: 'actor_5' } },
      //{ data: { source: 'role_2', target: 'actor_6' } },
      { data: { source: 'role_3', target: 'actor_7' } },
      { data: { source: 'role_3', target: 'actor_8' } },
      //{ data: { source: 'role_3', target: 'actor_9' } },
      { data: { source: 'role_4', target: 'actor_10' } },
      { data: { source: 'role_4', target: 'actor_11' } },
      //{ data: { source: 'role_4', target: 'actor_12' } }
      
      
    ]
  },

  layout: {
    name: 'breadthfirst',
    directed: true,
    padding: 10
  }
}); // cy init

function openUrl(url) {
  window.open(url, '_blank'); // '_blank' opens the URL in a new tab
}

var nconsts = {
  "actor_1": "nm0935395",
  "actor_2": "nm1396022",
  "actor_4": "nm0379596",
  "actor_5": "nm1078479",
  "actor_7": "nm0000651",
  "actor_8": "nm0001448",
  "actor_10": "nm2794962",
  "actor_11": "nm5589690",
  "director_1": "nm0000631",
  "director_2": "nm0004838"
}
// Attaching click event listeners to 'actor' nodes
var actorNodes = ['actor_1', 'actor_2', 'actor_4', 'actor_5', 'actor_7', 'actor_8', 'actor_10', 'actor_11', 'director_1', 'director_2'];
actorNodes.forEach(function(actorId) {
  cy.getElementById(actorId).on('click', function() {
    var url = 'https://www.imdb.com/name/' + nconsts[actorId];
    openUrl(url);
  });
});

cy.elements('node[id != "Science-Fiction"]').style({
  'display': 'none',
  'opacity': 0,
  'width': 0,
  'height': 0
});

// Function to animate nodes to visible
function animateNodesToShow(nodes) {
  nodes.animate({
    style: {
      'opacity': 1,
      'width': 150, // Set to your default node size
      'height': 150
    }
  }, {
    duration: 500 // Duration of animation in milliseconds
  }).style('display', 'element');
}

// Function to show nodes connected to a given node
function showConnectedNodes(nodeId) {
  var node = cy.getElementById(nodeId);
  var connectedNodes = node.connectedEdges().connectedNodes();

  animateNodesToShow(connectedNodes);
  node.connectedEdges().style('display', 'element');
}

// Click event on 'Science-Fiction' node to show 'role' nodes
cy.getElementById('Science-Fiction').on('click', function() {
  showConnectedNodes('Science-Fiction');
});

// Click events on 'role' nodes to show connected nodes
['role_1', 'role_2', 'role_3', 'role_4', 'director'].forEach(function(roleId) {
  cy.getElementById(roleId).on('click', function() {
    showConnectedNodes(roleId);
  });
});

cy.on('mouseover', 'node', function(event){
  var node = event.target;
  var nodeName = node.id();
  var nodePosition = node.renderedPosition();

  // create a div element to use as a tooltip
  var tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.innerHTML = nodeName;
  document.body.appendChild(tooltip);

  // Use pageX and pageY from the original event for positioning
  tooltip.style.left = (nodePosition.x + window.scrollX + 5) + 'px';
  tooltip.style.top = (nodePosition.y + window.scrollY + 5) + 'px';
  tooltip.style.position = 'absolute';
  tooltip.style.zIndex = 1000;
});

cy.on('mouseout', 'node', function(){
  // remove the tooltip on mouseout
  var tooltips = document.querySelectorAll('.tooltip');
  tooltips.forEach(function(tooltip){
    tooltip.remove();
  });
});

// on tap