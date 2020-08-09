var count;
var pcStatus = [];
var pcName = []; //for help seat creator get index
var aCount = 0;
var a1A = 0;
var a2A = 0;
var a3A = 0;
var cameraRotate = 1; //flag, open in default
var seatPosi=[];
var seatPosiName=[];
var loadingState = 0;
var searchRes = [];
var camera;

var r_temp_text_name = 0;
var r_temp_line_name = 0;

var obj_finish;
var dobjects=Array();


//Close guide window in user interface
function closeGuide(){
	var guideWindow = document.getElementById("guide");
	var guideWindow_text = document.getElementById("guide_text");
	var guideWindow_line = document.getElementById("guide_line");
	var guideWindow_close = document.getElementById("guide_close");
	var fid = setInterval(frame, 1);
	var pos_height = 240;
	function frame() {
		if (pos_height == 0) {
			clearInterval(fid);
			guideWindow_text.style.opacity = 0;
			guideWindow_line.style.opacity = 0;
			guideWindow_close.style.opacity = 0;
			guideWindow.style.opacity = 0;
		} else {
			pos_height = pos_height - 5; 
			guideWindow.style.height = pos_height + 'px'; 
			guideWindow_text.style.animation = "disappear 0.5s 1";
			guideWindow_line.style.animation = "disappear 0.5s 1";
			guideWindow_close.style.animation = "disappear 0.5s 1";
		}
	}
}





//Control of camera rotaion
function cameraRSF(){
	cameraRotate = (cameraRotate == 1) ? 0 : 1;
	cameraRotateText = (cameraRotate == 1) ? 'Stop Camera 360°' : 'Open Camera 360°';
	$('#cameraRBtn').text(cameraRotateText);
}





var OBJLoader2Example = (function () {
	var Validator = THREE.LoaderSupport.Validator;
	function OBJLoader2Example( elementToBindTo ) {
		this.renderer = null;
		this.canvas = elementToBindTo;
		this.aspectRatio = 0;
		this.recalcAspectRatio();
		this.scene = null;
		this.cameraDefaults = {
			posCamera: new THREE.Vector3( 0.0, 1600.0, 1800.0 ),
			posCameraTarget: new THREE.Vector3( 0, 1, 0 ),
			near: 200,
			far: 66000,
			fov: 40
		};
		this.camera = null;
		this.cameraTarget = this.cameraDefaults.posCameraTarget;
		this.controls = null;
	}
	//console.log(pcName.indexOf('UL-OA-MAIN-3-PC-245'));
	
	OBJLoader2Example.prototype.initGL = function () {
		this.renderer = new THREE.WebGLRenderer( {
			canvas: this.canvas,
			antialias: true,
			autoClear: true,
			alpha: true,
		} );
		//this.renderer.setClearColor( 0x050505 );
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera( this.cameraDefaults.fov, this.aspectRatio, this.cameraDefaults.near, this.cameraDefaults.far );
		this.resetCamera();
		camera=this.camera;
		//this.controls = new THREE.TrackballControls( this.camera, this.renderer.domElement );
		this.controls = new THREE.OrbitControls( this.camera, this.renderer.domElement );
		//this.controls.addEventListener( 'change', this.render ); // remove when using animation loop
		this.controls.enableZoom = true;
		
		
		

		//Ambient Light
		var ambientLight = new THREE.AmbientLight(0x60a0ae);
		this.scene.add(ambientLight);

		//Directional Light 
		var directionalLight1 = new THREE.DirectionalLight( 0xafcdd3 );
		var directionalLight2 = new THREE.DirectionalLight( 0xafcdd3 );
		var directionalLight3 = new THREE.DirectionalLight( 0xafcdd3);
		var directionalLight4 = new THREE.DirectionalLight( 0xefefef);
		//var pointLight1 = new THREE.PointLight( 0xf3f3f3 );
		//var directionalLight5 = new THREE.DirectionalLight( 0xefefef);
		directionalLight1.position.set( -400, 300, -400 );
		directionalLight2.position.set( 5000, 10000, 5000 );
		directionalLight3.position.set( 0, 100, -50 );
		directionalLight4.position.set( 0, 500, 0 );
		//directionalLight5.position.set( 0, 1000, 0 );
		this.scene.add( directionalLight1 );
		this.scene.add( directionalLight2 );
		this.scene.add( directionalLight3 );
		this.scene.add( directionalLight4 );
		//this.scene.add( pointLight1 );
		//this.scene.add( directionalLight5 );

		//set sence background
		//this.scene.background = new THREE.Color( 0xff0000 );
		

		//grid line
		var helper = new THREE.GridHelper( 30000, 100, 0x415053, 0x131313 );
		this.scene.add( helper );
		console.log(this.scene);
		
	};

	
	
	//IMPORT OBJ FILE
	OBJLoader2Example.prototype.initContent = function () {
		
		var modelName1 = 'libraryMainBuilding';
		var modelName2 = 'librarySeat';
		var modelName3 = 'libraryNearBy';
		var scope = this;
		var loadCount = 1;
		var objLoader = new THREE.OBJLoader2();

		var callbackOnLoad = function ( event ) {
			var local = new THREE.Object3D();
			local.name = "imported_object_" + loadCount;
			scope.scene.add( local );
			local.add( event.detail.loaderRootNode );
			local.position.set( 500, 0, 2400 );
			loadCount++;
		};

		//Load Main Library Object
		var onLoadMtl_Main = function ( materials ) {
			objLoader.setModelName( modelName1 );
			objLoader.setMaterials( materials );
			objLoader.setUseIndices( true );
			objLoader.setDisregardNormals( false );

			
			objLoader.load( './models/Project_SAS_Main.obj?v=12', callbackOnLoad, null, null, null, false );
		};
		//Load Seat Object
		var onLoadMtl_Seat = function ( materials ) {
			objLoader.setModelName( modelName2 );
			//objLoader.setMaterials( materials );
			objLoader.setUseIndices( true );
			objLoader.setDisregardNormals( false );
			objLoader.load( './models/Project_SAS_Seat.obj?v=12', callbackOnLoad, null, null, null, false );
		};
		//Load Nearby Building
		var onLoadMtl_NB = function ( materials ) {
			objLoader.setModelName( modelName3 );
			//objLoader.setMaterials( materials );
			objLoader.setUseIndices( true );
			objLoader.setDisregardNormals( false );
			objLoader.load( './models/Project_SAS_NB.obj?v=12', callbackOnLoad, null, null, null, false );
		};

		//Loader Controller
		//Load Main Building Material and callback main building loadup
		objLoader.loadMtl( './models/Project_SAS_Main.mtl?v=12', 'Project_SAS_Main.mtl', null, onLoadMtl_Main );
		//Load seat and nearby building
		onLoadMtl_Seat();
		onLoadMtl_NB();
		
		var onLoadRoad = function(){
			var material = new THREE.LineBasicMaterial({
				color: 0x00aeff
			});
			
			var geometry1 = new THREE.Geometry();
			geometry1.vertices.push(
				new THREE.Vector3( 5451.825 + 500, 150, -10283.786 + 2400 ),
				new THREE.Vector3( -6489.499 + 500, 150, -10283.786 + 2400 ),
				new THREE.Vector3( -11601.639 + 500, 150, -1963.667 + 2400 ),
				new THREE.Vector3( -3008 + 500, 150, 1446.87 + 2400 ),
				new THREE.Vector3( 22467.996 + 500, 150, 1446.87 + 2400 )
			);

			var geometry2 = new THREE.Geometry();
			geometry2.vertices.push(
				new THREE.Vector3( -11601.639 + 500, 150, -1963.667 + 2400 ),
				new THREE.Vector3( -27760.524 + 500, 150, -1963.667 + 2400 ),
			);

			var geometry3 = new THREE.Geometry();
			geometry3.vertices.push(
				new THREE.Vector3( 5451.852 + 500, 150, -36356 + 2400 ),
				new THREE.Vector3( 5451.852 + 500, 150, 18924.165 + 2400 ),
			);
			
			var line1 = new THREE.Line( geometry1, material );
			var line2 = new THREE.Line( geometry2, material );
			var line3 = new THREE.Line( geometry3, material );
			scope.scene.add(line1);
			scope.scene.add(line2);
			scope.scene.add(line3);
		}

		onLoadRoad();
		obj_finish = 1;
		console.log(this.scene)

	};
	



	//Init process
	OBJLoader2Example.prototype.initLt = function () {
			//get seat positions
			$.ajax({
					url: './data_seat.php',
					type: 'POST',
					dataType: 'json',
					async: false,
					success: function (res) {
						for(i=0;i<res.length;i++){
							seatPosi.push(res[i]);
							seatPosiName.push(res[i].name)
						}
					},
			});


/*
		0 = off
		1 = powered on
		2 = in use
	*/

	//Request data from IT Services API
	/*$.ajax({
		url: 'http://api.ssd.port.ac.uk/lib-pca/',
		type: 'post',
		dataType: 'json',
		async: false,
		success: function (res) {
			

			for(i=0;i<res.length;i++){
				if(res[i].state == 1){
					var resName = res[i].name;
					if(resName.search("MAIN") != -1){
						var resArea = resName.substring(11,12);
						switch (parseInt(resArea)){

							case 1:
							a1A++;
							break;

							case 2:
							a2A++;
							break;

							case 3:
							a3A++;
							break;
						}
					}
					aCount++;   
				}

				pcStatus.push(res[i]);
				pcName.push(res[i].name);
				
			}

			//Z value should convert to minus
			loadText(a1A,500,500,-200,"兆意创新");
			loadText(a2A,-1000,500,-1000,"紫光同方");
			loadText(a3A,-2200,500,-600,"清华数码");
			$('#info_pcAva').text(aCount);
		}
	});*/
	

	//get local json data in debug
	$.ajax({
		url: './api/data.json',
		dataType: 'json',
		async: false,
		success: function (res) {
			
			for(i=0;i<res.length;i++){
				if(res[i].state == 0 || res[i].state == 1){
					var resName = res[i].name;
					if(resName.search("MAIN") != -1){
						var resArea = resName.substring(11,12);
						switch (parseInt(resArea)){

							case 1:
							a1A++;
							break;

							case 2:
							a2A++;
							break;

							case 3:
							a3A++;
							break;
						}
					}
					aCount++;   
				}
				
				pcStatus.push(res[i]);
				pcName.push(res[i].name);
			}
			//Z value should convert to minus
			loadText(a1A,500,500,-200,"兆意创新");
			loadText(a2A,-1000,500,-1000,"紫光同方");
			loadText(a3A,-2200,500,-600,"清华数码");
			
			$('#info_pcAva').text(aCount);
		}
	});	

		//load nearby building introduction
		var su_Text = "大学城";
		var ds_text = "楼盘开发区";
		var sc_text = "体育中心";
		loadText(su_Text,-7900,500,-1000,"UPSU");
		loadText(ds_text,-2852,500,-5486,"DENTAL-ACADEMY");
		loadText(sc_text,-4501,600,6062,"体育中心");


		


		//Create screen function
		that = this;
		function createLaptop(n){
			
			count = i;
			//console.log(seatPosi[count]);
			
			var geometry = new THREE.BoxGeometry( 36, 20, 3 );
			
			var pcIndex = pcName.indexOf(seatPosi[count].name)
			if(pcIndex == -1){
				var theStatus = 0;
			}else{
				var theStatus = pcStatus[pcIndex].state;
			}
			
			if(theStatus == 2  || theStatus == 0){
				var material = new THREE.MeshBasicMaterial({ 
					color: 0xe82d43,
					specular: 0xff0000,
					shininess: 1,
				});
			}
			if(theStatus == 1){
				var material = new THREE.MeshBasicMaterial({ 
					color: 0x59ecaf,
					specular: 0xff0000,
					shininess: 1,
				});
			}
			
			var cube = new THREE.Mesh( geometry, material );
			//console.log(seatPosi[count][0].substring(seatPosi[count][0].length - 3, seatPosi[count][0].length));
			var cube_x = parseInt(seatPosi[count].position_x) + 500;
			var cube_y = parseInt(seatPosi[count].position_y);
			var cube_z = parseInt(seatPosi[count].position_z) + 2400;
			cube.position.set(cube_x, cube_y, cube_z);
			//console.log(seatPosi[count].position_x)
			cube.rotateY((seatPosi[count].rotation * Math.PI)/180);
			cube.name = n;
			that.scene.add( cube );
			that.scene.fog = new THREE.Fog( 0x20556b, 6000, 29000 );

			/*
				0 = off
				1 = powered on
				2 = in use
			*/

		}
		for(i=0;i<seatPosi.length;i++){
			createLaptop(seatPosi[i].name);
		}
	}

	//Main entrance indicator
	loadText2("电子信息产业园区", -800, 0, 2000, -(Math.PI / 2), 0x40e2ff);

	//Load Text Function 
	//t = text value, xyz, n = name value
	function loadText(t,x,y,z,n) {
		
		that = this;
		var loader = new THREE.FontLoader();
		//loader.load( "./asset/fonts/barlow_bold.typeface.json", function ( font ) {
			loader.load( "./asset/fonts/simhei.json", function ( font ) {
			var textGeo = new THREE.TextGeometry( t, {
				font: font,
				size: 200,
				height: 1,
				curveSegments: 100,
				bevelEnabled: false
			} );

			var textGeo_area = new THREE.TextGeometry( n, {
				font: font,
				size: 70,
				height: 1,
				curveSegments: 100,
				bevelEnabled: false
			} );

			var textGeo_intro = new THREE.TextGeometry( "存在安全隐患", {
				font: font,
				size: 50,
				height: 1,
				curveSegments: 100,
				bevelEnabled: false
			} );
			
			if(t > 40){
				var textMaterial = new THREE.MeshPhongMaterial( { color: 0x59ecaf } );
			}

			if(t >= 20 && t <= 40){
				var textMaterial = new THREE.MeshPhongMaterial( { color: 0xff8b3e } );
			}

			if(t < 20){
				var textMaterial = new THREE.MeshPhongMaterial( { color: 0xff3e3e } );
			}

			if(typeof t !== "number"){
				var textMaterial = new THREE.MeshPhongMaterial( { color: 0x40e2ff } );
			}
			
		
			var textMesh = new THREE.Mesh( textGeo, textMaterial );
			var textMesh_intro = new THREE.Mesh( textGeo_intro, textMaterial );
			var textMesh_area = new THREE.Mesh( textGeo_area, textMaterial );

			if(typeof t === "number"){
				y = y + parseInt(t)*5;
			}
			
				

			textMesh.position.x = x;
			textMesh.position.y = y;
			textMesh.position.z = z;

			textMesh_area.position.x = x;
			textMesh_area.position.y = y - 100;
			textMesh_area.position.z = z;

			textMesh_intro.position.x = x;
			textMesh_intro.position.y = y - 160;
			textMesh_intro.position.z = z;



			var text_cLine_material = new THREE.LineBasicMaterial({
				color: 0x00aeff
			});
			var text_cLine = new THREE.Geometry();
			
			text_cLine.vertices.push(
				new THREE.Vector3( x, y-20,z ),
				new THREE.Vector3( x,0,z),
			);

			var text_cLine_Final = new THREE.Line( text_cLine, text_cLine_material );
			//console.log(text_cLine_Final)
			that.scene.add(text_cLine_Final);
			
			textMesh.name = n;
			textMesh_area.name = n + "-area";
			textMesh_intro.name = n + "-intro";

			that.scene.add( textMesh );
			that.scene.add( textMesh_area );
			that.scene.add( textMesh_intro );

		
		});
	}

	function loadText2(t,x,y,z,r,c){
		that = this;
		var loader = new THREE.FontLoader();
		//loader.load( "./asset/fonts/barlow_bold.typeface.json", function ( font ) {
			loader.load( "./asset/fonts/simhei.json", function ( font ) {
			var textGeo = new THREE.TextGeometry( t, {
				font: font,
				size: 100,
				height: 1,
				curveSegments: 100,
				bevelEnabled: false
			} );

			var textMaterial = new THREE.MeshPhongMaterial( { color: c } );
		
			var textMesh = new THREE.Mesh( textGeo, textMaterial );

			textMesh.position.x = x;
			textMesh.position.y = y;
			textMesh.position.z = z;
			textMesh.rotation.x = r;
	
			textMesh.name = t;

			that.scene.add( textMesh );
		});
	}


	
	

	var loader = new THREE.FontLoader();

	//Initial Visual Indicator
	OBJLoader2Example.prototype.seatIndicator = function ( resArray ) {
		
		//var textGeo_findSeat_Mesh = new THREE.Mesh( textGeo_findSeat, textGeo_findSeat_material );

		for(c=0;c<resArray.length;c++){
			var r_index = seatPosiName.indexOf(resArray[c]);

			if(r_index != -1){

				//console.log(this.scene)
				loader.load( "./asset/fonts/barlow_bold.typeface.json", function ( font ) {


					//object
					var textGeo_findSeat = new THREE.TextGeometry( "HERE", {
						font: font,
						size: 200,
						height: 1,
						curveSegments: 100,
						bevelEnabled: false
					});
			
					var textGeo_findSeat_material = new THREE.MeshPhongMaterial( { color: 0xfff32f } );

					var textGeo_findSeat_Mesh = new THREE.Mesh( textGeo_findSeat, textGeo_findSeat_material );

					var r_x = parseInt(seatPosi[r_index].position_x) + 500;
					var r_y = parseInt(seatPosi[r_index].position_y) + 1000;
					var r_z = parseInt(seatPosi[r_index].position_z) + 2400

					textGeo_findSeat_Mesh.position.x = r_x;
					textGeo_findSeat_Mesh.position.y = r_y;
					textGeo_findSeat_Mesh.position.z = r_z;
					textGeo_findSeat_Mesh.name = seatPosi[r_index].name + "_mark_ava";

					app.scene.add(textGeo_findSeat_Mesh);

					//line
					var text_cLine_material = new THREE.LineBasicMaterial({
						color: 0xfff32f 
					});
					var text_cLine = new THREE.Geometry();
					
					text_cLine.vertices.push(
						new THREE.Vector3( r_x, r_y - 20,r_z ),
						new THREE.Vector3( r_x,0,r_z),
					);
		
					var text_cLine_Final = new THREE.Line( text_cLine, text_cLine_material );
					text_cLine_Final.name = seatPosi[r_index].name + "_mark_line";
					//console.log(text_cLine_Final)
					that.scene.add(text_cLine_Final);

					r_temp_text_name = seatPosi[r_index].name + "_mark_ava";
					r_temp_line_name = seatPosi[r_index].name + "_mark_line";

				});
				//loadText(seatPosi[r_index].name, seatPosi[r_index].position_x, seatPosi[r_index].position_y, seatPosi[r_index].position_z, seatPosi[r_index].name);
				return;

			}
		}
		
	}

	//Remove seat serach indicator
	OBJLoader2Example.prototype.seatIndicatorRemove = function () {
		if(r_temp_text_name !=0 && r_temp_line_name != 0){
			var r_m_text = app.scene.getObjectByName(r_temp_text_name);
			var r_m_line = app.scene.getObjectByName(r_temp_line_name);
			app.scene.remove(r_m_text);
			app.scene.remove(r_m_line);
			
			r_temp_text_name = 0;
			r_temp_line_name = 0;

			searchRes = [];
		}
		
	}

	//Don't know what it is but do not delete it !!!!!!
	OBJLoader2Example.prototype._reportProgress = function( event ) {
		var output = Validator.verifyInput( event.detail.text, '' );
		console.log( 'Progress: ' + output );
		//document.getElementById( 'feedback' ).innerHTML = output;
		
	};

	OBJLoader2Example.prototype.resizeDisplayGL = function () {
		//this.controls.handleResize();
		this.recalcAspectRatio();
		this.renderer.setSize( this.canvas.offsetWidth, this.canvas.offsetHeight, false );
		this.updateCamera();
		
	};

	OBJLoader2Example.prototype.recalcAspectRatio = function () {
		this.aspectRatio = ( this.canvas.offsetHeight === 0 ) ? 1 : this.canvas.offsetWidth / this.canvas.offsetHeight;
	};

	OBJLoader2Example.prototype.resetCamera = function () {
		this.camera.position.copy( this.cameraDefaults.posCamera );
		this.cameraTarget.copy( this.cameraDefaults.posCameraTarget );
		this.updateCamera();
	};

	OBJLoader2Example.prototype.updateCamera = function () {
		this.camera.aspect = this.aspectRatio;
		this.camera.lookAt( this.cameraTarget );
		this.camera.updateProjectionMatrix();
	};

	OBJLoader2Example.prototype.render = function () {
		//if ( ! this.renderer.autoClear ) this.renderer.clear();
		this.controls.update();
		this.renderer.render( this.scene, this.camera );
	};

	return OBJLoader2Example;
})();


//Main controller 
var app = new OBJLoader2Example( document.getElementById( 'main' ) );
var resizeWindow = function () {
	app.resizeDisplayGL();
};

//Start real-time render

var render = function () {
	
	//Render controller
	requestAnimationFrame( render );
	
	//Set text look at to the camera all the time
	var aCText0 = app.scene.getObjectByName("兆意创新");
	var aCText1 = app.scene.getObjectByName("紫光同方");
	var aCText2 = app.scene.getObjectByName("清华数码");
	var aCText3 = app.scene.getObjectByName("UPSU");
	var aCText4 = app.scene.getObjectByName("DENTAL-ACADEMY");
	var aCText5 = app.scene.getObjectByName("体育中心");
	
	var aCText0_area = app.scene.getObjectByName("兆意创新-area");
	var aCText1_area = app.scene.getObjectByName("紫光同方-area");
	var aCText2_area = app.scene.getObjectByName("清华数码-area");
	var aCText3_area = app.scene.getObjectByName("UPSU-area");
	var aCText4_area = app.scene.getObjectByName("DENTAL-ACADEMY-area");
	var aCText5_area = app.scene.getObjectByName("体育中心-area");

	var aCText0_intro = app.scene.getObjectByName("兆意创新-intro");
	var aCText1_intro = app.scene.getObjectByName("紫光同方-intro");
	var aCText2_intro = app.scene.getObjectByName("清华数码-intro");
	var aCText3_intro = app.scene.getObjectByName("UPSU-intro");
	var aCText4_intro = app.scene.getObjectByName("DENTAL-ACADEMY-intro");
	var aCText5_intro = app.scene.getObjectByName("体育中心-intro");



	
	if(aCText5_intro){
		aCText0.lookAt( app.camera.position );
		aCText1.lookAt( app.camera.position );
		aCText2.lookAt( app.camera.position );
		aCText3.lookAt( app.camera.position );
		aCText4.lookAt( app.camera.position );
		aCText5.lookAt( app.camera.position );

		aCText0_area.lookAt( app.camera.position );
		aCText1_area.lookAt( app.camera.position );
		aCText2_area.lookAt( app.camera.position );
		aCText3_area.lookAt( app.camera.position );
		aCText4_area.lookAt( app.camera.position );
		aCText5_area.lookAt( app.camera.position );
		
		aCText0_intro.lookAt( app.camera.position );
		aCText1_intro.lookAt( app.camera.position );
		aCText2_intro.lookAt( app.camera.position );
		aCText3_intro.lookAt( app.camera.position );
		aCText4_intro.lookAt( app.camera.position );
		aCText5_intro.lookAt( app.camera.position );
		$("#loading_screen").css("display", "none");
	}
	

	//Turn On and Off the camera auto-rotation
	if(cameraRotate == 1){
		//Animate Camera
		var timer = Date.now() * 0.0001;
		app.camera.position.x = Math.cos( timer ) * 3600;
		app.camera.position.z = Math.sin( timer ) * 3600;

		//Click screen and disable rotation animate
		$( "#main" ).mousedown(function() {
			cameraRotate = 0;
			cameraRotateText = (cameraRotate == 1) ? 'Stop Camera 360°' : 'Open Camera 360°';
			$('#cameraRBtn').text(cameraRotateText);
		});
				
	}else{
		
		//do nothing...
	}

	//Zoom in to transparent, control zone -> cube: 6400x6400x6400
	if(app.scene.getObjectById(22)){

		var tranOpTarget_Main = app.scene.getObjectById(22);
		var tranOpTargetChildren_Main = tranOpTarget_Main.children;
		
		if(app.camera.position.x < 6400 
			&& app.camera.position.x > -6400 
			&& app.camera.position.z < 6400 
			&& app.camera.position.z > -6400 
			&& app.camera.position.y < 6400 
			&& app.camera.position.y > -6400){
			for(i=0;i<tranOpTargetChildren_Main.length;i++){
				tranOpTarget_Main.children[i].material.opacity = 0.07;
			}

		}else{

			for(i=0;i<tranOpTargetChildren_Main.length;i++){
				tranOpTarget_Main.children[i].material.opacity = 0.8;
			}

		}
	}
	
	
	//Disable camera move to underground
	if(app.camera.position.y < 0){
		app.camera.position.y = 0;
	}

	app.render();
	
};
window.addEventListener( 'resize', resizeWindow, false );

app.initGL();
app.resizeDisplayGL();
app.initContent();
//app.initSeat();
app.initLt();
render();

//Search seat call function, data processing
function searchSeat(){

	$("#searchBtn").css("opacity","0.5");
	$("#find_seat").css("opacity","0.3");
	$("#searchBtn").css("cursor","default");
	$("#searchBtn").removeAttr("onclick");
	
	var v = parseInt($("#find_seat_value").val());
	for(i=0;i<pcName.length;i++){
		if(pcStatus[i].state == 1){
			var sCount = 0;
			for(a=0; a<v; a++){
				
				if(i+a < pcStatus.length){
					if(pcStatus[i+a].state == 1){
						sCount++;
					}
				} 
				if(sCount == v){
					searchRes.push(pcStatus[i].name);
				}
				
			}
			
		}
	}
	
	//If there are results
	if(searchRes.length > 0){
		//disorder array 
		//for display different result everytimes
		searchRes.sort(function() {return .5 - Math.random();});

		//Delete repert elements in array can call function for create 3D elements
		app.seatIndicator(unique(searchRes), v);
	}else{
		//No result
		//alert("There are no available options under selected condition. Please try to book a meeting/study room.");
		alertPopup("Sorry, no seats available in this condition. Please try to book the meeting/study room.");

	}
	
	//Close in 3.6s
	setTimeout(function(){
		$("#searchBtn").css("opacity","1");
		$("#find_seat").css("opacity","1");
		$("#searchBtn").css("cursor","pointer");
		$('#searchBtn').attr('onClick', "searchSeat()");
		app.seatIndicatorRemove();	
	}, 3600)
}

function advance_mylocation(){
	console.log("aaa")
	$("#advance_settings").css("display", "block");
}

//delete repeat elements in array
function unique(array) {
    var res = [];
    for (var i = 0, len = array.length; i < len; i++) {
        var current = array[i];
        if (res.indexOf(current) === -1) {
            res.push(current);
        }
    }
    return res;
}

	

function alertPopup(text){
	$("#alert").css("display", "block");
	$("#alert").css("animation-name", "top2down");
	$("#alert_text").text(text);
	setTimeout(function(){
		$("#alert").css("animation-name", "down2top");
	}, 3600)

	setTimeout(function(){
		$("#alert").css("display", "none");
	}, 3720)
}

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

function onMouseClick(event){
    //将鼠标点击位置的屏幕坐标转换成threejs中的标准坐标

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = (event.clientY/window.innerHeight) *2 + 1
 
    // 通过鼠标点的位置和当前相机的矩阵计算出raycaster
    raycaster.setFromCamera( mouse,camera );

    // 获取raycaster直线和所有模型相交的数组集合
    var intersects = raycaster.intersectObjects(app.scene.children);
    console.log(intersects);

    for ( var i = 0; i < intersects.length; i++ ) {

            intersects[ i ].object.material.color.set( 0xff0000 );

        }
    }

window.addEventListener( 'click', onMouseClick, false );

