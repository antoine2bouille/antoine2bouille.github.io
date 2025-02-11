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
        'border-color': '#A32303',
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
    .selector('#Drama')
      .css({
        'background-image': '/assets/img/drama_mask.jpeg',
        
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
        'background-image': '/assets/img/actors/drama/alden_ehrenreich.webp'
      })
  .selector('#actor_2')
      .css({
        'background-image': '/assets/img/actors/drama/tom_felton.webp'
      })
  .selector('#actor_4')
      .css({
        'background-image': '/assets/img/actors/drama/jared_leto.jpeg'
      })
  .selector('#actor_5')
      .css({
        'background-image': '/assets/img/actors/drama/jon_favreau.jpeg'
      })
  .selector('#actor_7')
      .css({
        'background-image': '/assets/img/actors/drama/mel_gibson.webp'
      })
  .selector('#actor_8')
      .css({
        'background-image': '/assets/img/actors/drama/denzel_washington.webp'
      })
  .selector('#actor_10')
      .css({
        'background-image': '/assets/img/actors/drama/olivia_cooke.jpeg'
      })
  .selector('#actor_11')
      .css({
        'background-image': '/assets/img/actors/drama/kelsey_asbille.webp'
      })
  .selector('#director')
      .css({
        'background-image': '/assets/img/directors/director_chair.png'
      })
  .selector('#director_1')
      .css({
        'background-image': '/assets/img/directors/woody_allen.jpg'
      })
  .selector('#director_2')
      .css({
        'background-image': '/assets/img/directors/ridley_scott.jpeg'
      }),
   

  elements: {
    nodes: [
      
      { data: { id: 'Drama' } },
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
      
      { data: { source: 'Drama', target: 'role_1' } },
      { data: { source: 'Drama', target: 'role_2' } },
      { data: { source: 'Drama', target: 'role_3' } },
      { data: { source: 'Drama', target: 'role_4' } },
      { data: { source: 'Drama', target: 'director' } },
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
    'actor_1': 'nm2403277',
    'actor_2': 'nm0271657',
    'actor_4': 'nm0001467',
    'actor_5': 'nm0269463',
    'actor_7': 'nm0000154',
    'actor_8': 'nm0000243',
    'actor_10': 'nm4972453',
    'actor_11': 'nm2080328',
    'director_1': 'nm0000095',
    'director_2': 'nm0000631'
};

var names = {
  'Drama' : 'Drama',
  'director': 'Director',
  'role_1': 'Role 1',
  'role_2': 'Role 2',
  'role_3': 'Role 3',
  'role_4': 'Role 4',
  'actor_1': 'Alden Ehrenreich',
  'actor_2': 'Tom Felton',
  'actor_4': 'Jared Leto',
  'actor_5': 'Jon Favreau',
  'actor_7': 'Mel Gibson',
  'actor_8': 'Denzel Washington',
  'actor_10': 'Olivia Cooke',
  'actor_11': 'Kelsey Asbille',
  'director_1': 'Woody Allen',
  'director_2': 'Ridley Scott'
};

// Attaching click event listeners to 'actor' nodes
var actorNodes = ['actor_1', 'actor_2', 'actor_4', 'actor_5', 'actor_7', 'actor_8', 'actor_10', 'actor_11', 'director_1', 'director_2'];
actorNodes.forEach(function(actorId) {
  cy.getElementById(actorId).on('click', function() {
    var url = 'https://www.imdb.com/name/' + nconsts[actorId];
    openUrl(url);
  });
});

cy.elements('node[id != "Drama"]').style({
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

// Click event on 'Drama' node to show 'role' nodes
cy.getElementById('Drama').on('click', function() {
  showConnectedNodes('Drama');
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