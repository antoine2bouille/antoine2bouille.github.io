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
        'border-color': '#C58135',
        'border-width': 6,
        'border-opacity': 1
      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'width': 9,
        'target-arrow-shape': 'triangle',
        'line-color': '#CF9E11',
        'target-arrow-color': '#CF9E11'
      })
    .selector('#genre')
      .css({
        'background-image': '/assets/img/action_logo.jpg',
        
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
        'background-image': '/assets/img/actors/action/landry_bender.jpeg'
      })
  .selector('#actor_2')
      .css({
        'background-image': '/assets/img/actors/action/joey_king.jpeg'
      })
  .selector('#actor_4')
      .css({
        'background-image': '/assets/img/actors/action/meryl_streep.jpeg'
      })
  .selector('#actor_5')
      .css({
        'background-image': '/assets/img/actors/action/debra_winger.jpeg'
      })
  .selector('#actor_7')
      .css({
        'background-image': '/assets/img/di_caprio.webp'
      })
  .selector('#actor_8')
      .css({
        'background-image': '/assets/img/actors/action/christian_bale.jpeg'
      })
  .selector('#actor_10')
      .css({
        'background-image': '/assets/img/actors/action/nick_robinson.jpeg'
      })
  .selector('#actor_11')
      .css({
        'background-image': '/assets/img/actors/action/kj_apa.jpeg'
      })
  .selector('#director')
      .css({
        'background-image': '/assets/img/directors/director_chair.png'
      })
  .selector('#director_1')
      .css({
        'background-image': '/assets/img/directors/john_irvin.jpg'
      })
  .selector('#director_2')
      .css({
        'background-image': '/assets/img/directors/philip_noyce.jpeg'
      }),
   

  elements: {
    nodes: [
      
      { data: { id: 'genre' } },
      { data: { id: 'role_1' } },
      { data: { id: 'role_2' } },
      { data: { id: 'role_3' } },
      { data: { id: 'role_4' } },
      { data: { id: 'director' } },
      { data: { id: 'director_1' } },
      { data: { id: 'director_2' } },
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
    ],
    edges: [
      
      { data: { source: 'genre', target: 'role_1' } },
      { data: { source: 'genre', target: 'role_2' } },
      { data: { source: 'genre', target: 'role_3' } },
      { data: { source: 'genre', target: 'role_4' } },
      { data: { source: 'genre', target: 'director' } },
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
  "actor_1": "nm4085883",
  "actor_2": "nm1428821",
  "actor_4": "nm0000658",
  "actor_5": "nm0000700",
  "actor_7": "nm0000138",
  "actor_8": "nm0000288",
  "actor_10": "nm3538718",
  "actor_11": "nm6216001",
  "director_1": "nm0410139",
  "director_2": "nm0637518"
}

var names = {
  'genre': 'Action/Adventure',
  'director': 'Director',
  'role_1': 'Role 1',
  'role_2': 'Role 2',
  'role_3': 'Role 3',
  'role_4': 'Role 4',
  "actor_1": "Landry Bender",
  "actor_2": "Joey King",
  "actor_4": "Meryl Streep",
  "actor_5": "Debra Winger",
  "actor_7": "Leonardo DiCaprio",
  "actor_8": "Christian Bale",
  "actor_10": "Nick Robinson",
  "actor_11": "K.J. Apa",
  "director_1": "John Irvin",
  "director_2": "Philip Noyce"
}

// Attaching click event listeners to 'actor' nodes
var actorNodes = ['actor_1', 'actor_2', 'actor_4', 'actor_5', 'actor_7', 'actor_8', 'actor_10', 'actor_11', 'director_1', 'director_2'];
actorNodes.forEach(function(actorId) {
  cy.getElementById(actorId).on('click', function() {
    var url = 'https://www.imdb.com/name/' + nconsts[actorId];
    openUrl(url);
  });
});

cy.elements('node[id != "genre"]').style({
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

// Click event on 'genre' node to show 'role' nodes
cy.getElementById('genre').on('click', function() {
  showConnectedNodes('genre');
});

// Click events on 'role' nodes to show connected nodes
['role_1', 'role_2', 'role_3', 'role_4', 'director'].forEach(function(roleId) {
  cy.getElementById(roleId).on('click', function() {
    showConnectedNodes(roleId);
  });
});

cy.on('mouseover', 'node', function(event){
  var node = event.target;
  var nodeName = names[node.id()];
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