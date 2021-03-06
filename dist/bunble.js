require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"Basic":[function(require,module,exports){
const Circle = require('./Circle');
const Line = require('./Line');
const Text = require('./Text');
const Arc = require('./Arc');
const Polyline = require('./Polyline');
const Layer = require('./Layer');
const Hatch = require('./Hatch');
const Image = require('./Image');
const ImageDef = require('./ImageDef');

class Basic{
	
	constructor() {
		this.layers = {};
		this.activeLayer = null;
		this.imageArray = [];
	}
	
	
	addLayer(name, colorNumber){
	    this.layers[name] = new Layer(name, colorNumber);
	    return this;
	}
	
	setActiveLayer(name){
	    this.activeLayer = this.layers[name];
	    return this;
	}
	
	/**
	 *
	 * draw Line
	 * @param {number} x1 - origin x
     * @param {number} y1 - origin y
     * @param {number} x2 - end x
     * @param {number} y2 - end y
	 */
	drawLine(x1, y1, x2, y2)
	{
	    this.activeLayer.addShape(new Line(x1, y1, x2, y2));
	    return this;
	}
	
	/**
	 * draw circle
	 * 
	 * @param {number} x  - the centre of a circle  x 
	 * @param {number} y  - the centre of a circle  y
	 * @param {number} radius  - circle's radius
	 * 
	 */
	drawCircle(x,y,radius){
		this.activeLayer.addShape(new Circle(x,y,radius));
		return this;
	}
	
	/**
	 * draw text
	 * 
	 * @param {number} x - text Lower left quarter x 
	 * @param {number} y - text Lower left quarter y
	 * @param {number} lineheight - text line height
	 * @param {string} content - text
	 * @param {number}  
	 * 
	 */
	drawText(x,y,lineheight,content,angle){
		this.activeLayer.addShape(new Text(x,y,lineheight,content,angle));
		return this;
	}
	
	
	/**
	 * draw arc 
	 * 
	 * @param {number} x - circle x 
	 * @param {number} y - circle y
	 * @param {number} r - circle radius
	 * @param {number} startAn - arc start angle
	 * @param {number}  endAn  - arc end angle
	 */
	drawArc(x,y,r,startAn,endAn){
		this.activeLayer.addShape(new Arc(x,y,r,startAn,endAn));
		
		return this;
	}
	
	/**
	 * draw polyline
	 * 
	 * @param Array [] points - array like [[x,y],[x,y],...]
 	 */
	drawPolyline(points){
		this.activeLayer.addShape(new Polyline(points));
		return this;
	}
	
	drawHatch(points){
		this.activeLayer.addShape(new Hatch(points));
		return this;
	}
	/**
	 * insert image
	 * 
	 * @param {number} x - image lower left quarter x
	 * @param {number} y - image lower left quarter y
	 * @param {number} width - image width
	 * @param {number} height - image height
	 * @param {string} fileName - image fileName
	 */
	drawImage(x,y,width,height,fileName){
		this.activeLayer.addShape(new Image(x,y,width,height,fileName));
		this.imageArray.push(new ImageDef(width,height,fileName));
		return this;
	}
	
	toDxfString(){
		let s = '';
		
		s += "0\nSECTION\n2\nHEADER\n9\n$ACADVER\n1\nAC1027\n9\n$ACADMAINTVER\n70\n125\n9\n$DWGCODEPAGE\n3\nANSI_936\n9\n$LASTSAVEDBY\n1\nAdministrator\n9\n$REQUIREDVERSIONS\n160\n0\n9\n$INSBASE\n10\n0.0\n20\n0.0\n30\n0.0\n9\n$EXTMIN\n10\n1.000000000000000E+20\n20\n1.000000000000000E+20\n30\n1.000000000000000E+20\n9\n$EXTMAX\n10\n-1.000000000000000E+20\n20\n-1.000000000000000E+20\n30\n-1.000000000000000E+20\n9\n$LIMMIN\n10\n0.0\n20\n0.0\n9\n$LIMMAX\n10\n420.0\n20\n297.0\n9\n$ORTHOMODE\n70\n0\n9\n$REGENMODE\n70\n1\n9\n$FILLMODE\n70\n1\n9\n$QTEXTMODE\n70\n0\n9\n$MIRRTEXT\n70\n0\n9\n$LTSCALE\n40\n1.0\n9\n$ATTMODE\n70\n1\n9\n$TEXTSIZE\n40\n2.5\n9\n$TRACEWID\n40\n1.0\n9\n$TEXTSTYLE\n7\nStandard\n9\n$CLAYER\n8\n0\n9\n$CELTYPE\n6\nByLayer\n9\n$CECOLOR\n62\n256\n9\n$CELTSCALE\n40\n1.0\n9\n$DISPSILH\n70\n0\n9\n$DIMSCALE\n40\n1.0\n9\n$DIMASZ\n40\n2.5\n9\n$DIMEXO\n40\n0.625\n9\n$DIMDLI\n40\n3.75\n9\n$DIMRND\n40\n0.0\n9\n$DIMDLE\n40\n0.0\n9\n$DIMEXE\n40\n1.25\n9\n$DIMTP\n40\n0.0\n9\n$DIMTM\n40\n0.0\n9\n$DIMTXT\n40\n2.5\n9\n$DIMCEN\n40\n2.5\n9\n$DIMTSZ\n40\n0.0\n9\n$DIMTOL\n70\n0\n9\n$DIMLIM\n70\n0\n9\n$DIMTIH\n70\n0\n9\n$DIMTOH\n70\n0\n9\n$DIMSE1\n70\n0\n9\n$DIMSE2\n70\n0\n9\n$DIMTAD\n70\n1\n9\n$DIMZIN\n70\n8\n9\n$DIMBLK\n1\n\n9\n$DIMASO\n70\n1\n9\n$DIMSHO\n70\n1\n9\n$DIMPOST\n1\n\n9\n$DIMAPOST\n1\n\n9\n$DIMALT\n70\n0\n9\n$DIMALTD\n70\n3\n9\n$DIMALTF\n40\n0.03937007874016\n9\n$DIMLFAC\n40\n1.0\n9\n$DIMTOFL\n70\n1\n9\n$DIMTVP\n40\n0.0\n9\n$DIMTIX\n70\n0\n9\n$DIMSOXD\n70\n0\n9\n$DIMSAH\n70\n0\n9\n$DIMBLK1\n1\n\n9\n$DIMBLK2\n1\n\n9\n$DIMSTYLE\n2\nISO-25\n9\n$DIMCLRD\n70\n0\n9\n$DIMCLRE\n70\n0\n9\n$DIMCLRT\n70\n0\n9\n$DIMTFAC\n40\n1.0\n9\n$DIMGAP\n40\n0.625\n9\n$DIMJUST\n70\n0\n9\n$DIMSD1\n70\n0\n9\n$DIMSD2\n70\n0\n9\n$DIMTOLJ\n70\n0\n9\n$DIMTZIN\n70\n8\n9\n$DIMALTZ\n70\n0\n9\n$DIMALTTZ\n70\n0\n9\n$DIMUPT\n70\n0\n9\n$DIMDEC\n70\n2\n9\n$DIMTDEC\n70\n2\n9\n$DIMALTU\n70\n2\n9\n$DIMALTTD\n70\n3\n9\n$DIMTXSTY\n7\nStandard\n9\n$DIMAUNIT\n70\n0\n9\n$DIMADEC\n70\n0\n9\n$DIMALTRND\n40\n0.0\n9\n$DIMAZIN\n70\n0\n9\n$DIMDSEP\n70\n44\n9\n$DIMATFIT\n70\n3\n9\n$DIMFRAC\n70\n0\n9\n$DIMLDRBLK\n1\n\n9\n$DIMLUNIT\n70\n2\n9\n$DIMLWD\n70\n-2\n9\n$DIMLWE\n70\n-2\n9\n$DIMTMOVE\n70\n0\n9\n$DIMFXL\n40\n1.0\n9\n$DIMFXLON\n70\n0\n9\n$DIMJOGANG\n40\n0.7853981633974483\n9\n$DIMTFILL\n70\n0\n9\n$DIMTFILLCLR\n70\n0\n9\n$DIMARCSYM\n70\n0\n9\n$DIMLTYPE\n6\n\n9\n$DIMLTEX1\n6\n\n9\n$DIMLTEX2\n6\n\n9\n$DIMTXTDIRECTION\n70\n0\n9\n$LUNITS\n70\n2\n9\n$LUPREC\n70\n4\n9\n$SKETCHINC\n40\n1.0\n9\n$FILLETRAD\n40\n0.0\n9\n$AUNITS\n70\n0\n9\n$AUPREC\n70\n0\n9\n$MENU\n1\n.\n9\n$ELEVATION\n40\n0.0\n9\n$PELEVATION\n40\n0.0\n9\n$THICKNESS\n40\n0.0\n9\n$LIMCHECK\n70\n0\n9\n$CHAMFERA\n40\n0.0\n9\n$CHAMFERB\n40\n0.0\n9\n$CHAMFERC\n40\n0.0\n9\n$CHAMFERD\n40\n0.0\n9\n$SKPOLY\n70\n0\n9\n$TDCREATE\n40\n2458572.445312500\n9\n$TDUCREATE\n40\n2458572.111979167\n9\n$TDUPDATE\n40\n2458572.456840278\n9\n$TDUUPDATE\n40\n2458572.123506945\n9\n$TDINDWG\n40\n0.0115277778\n9\n$TDUSRTIMER\n40\n0.0115277778\n9\n$USRTIMER\n70\n1\n9\n$ANGBASE\n50\n0.0\n9\n$ANGDIR\n70\n0\n9\n$PDMODE\n70\n0\n9\n$PDSIZE\n40\n0.0\n9\n$PLINEWID\n40\n0.0\n9\n$SPLFRAME\n70\n0\n9\n$SPLINETYPE\n70\n6\n9\n$SPLINESEGS\n70\n8\n9\n$HANDSEED\n5\n2A2\n9\n$SURFTAB1\n70\n6\n9\n$SURFTAB2\n70\n6\n9\n$SURFTYPE\n70\n6\n9\n$SURFU\n70\n6\n9\n$SURFV\n70\n6\n9\n$UCSBASE\n2\n\n9\n$UCSNAME\n2\n\n9\n$UCSORG\n10\n0.0\n20\n0.0\n30\n0.0\n9\n$UCSXDIR\n10\n1.0\n20\n0.0\n30\n0.0\n9\n$UCSYDIR\n10\n0.0\n20\n1.0\n30\n0.0\n9\n$UCSORTHOREF\n2\n\n9\n$UCSORTHOVIEW\n70\n0\n9\n$UCSORGTOP\n10\n0.0\n20\n0.0\n30\n0.0\n9\n$UCSORGBOTTOM\n10\n0.0\n20\n0.0\n30\n0.0\n9\n$UCSORGLEFT\n10\n0.0\n20\n0.0\n30\n0.0\n9\n$UCSORGRIGHT\n10\n0.0\n20\n0.0\n30\n0.0\n9\n$UCSORGFRONT\n10\n0.0\n20\n0.0\n30\n0.0\n9\n$UCSORGBACK\n10\n0.0\n20\n0.0\n30\n0.0\n9\n$PUCSBASE\n2\n\n9\n$PUCSNAME\n2\n\n9\n$PUCSORG\n10\n0.0\n20\n0.0\n30\n0.0\n9\n$PUCSXDIR\n10\n1.0\n20\n0.0\n30\n0.0\n9\n$PUCSYDIR\n10\n0.0\n20\n1.0\n30\n0.0\n9\n$PUCSORTHOREF\n2\n\n9\n$PUCSORTHOVIEW\n70\n0\n9\n$PUCSORGTOP\n10\n0.0\n20\n0.0\n30\n0.0\n9\n$PUCSORGBOTTOM\n10\n0.0\n20\n0.0\n30\n0.0\n9\n$PUCSORGLEFT\n10\n0.0\n20\n0.0\n30\n0.0\n9\n$PUCSORGRIGHT\n10\n0.0\n20\n0.0\n30\n0.0\n9\n$PUCSORGFRONT\n10\n0.0\n20\n0.0\n30\n0.0\n9\n$PUCSORGBACK\n10\n0.0\n20\n0.0\n30\n0.0\n9\n$USERI1\n70\n0\n9\n$USERI2\n70\n0\n9\n$USERI3\n70\n0\n9\n$USERI4\n70\n0\n9\n$USERI5\n70\n0\n9\n$USERR1\n40\n0.0\n9\n$USERR2\n40\n0.0\n9\n$USERR3\n40\n0.0\n9\n$USERR4\n40\n0.0\n9\n$USERR5\n40\n0.0\n9\n$WORLDVIEW\n70\n1\n9\n$SHADEDGE\n70\n3\n9\n$SHADEDIF\n70\n70\n9\n$TILEMODE\n70\n1\n9\n$MAXACTVP\n70\n64\n9\n$PINSBASE\n10\n0.0\n20\n0.0\n30\n0.0\n9\n$PLIMCHECK\n70\n0\n9\n$PEXTMIN\n10\n0.0\n20\n0.0\n30\n0.0\n9\n$PEXTMAX\n10\n0.0\n20\n0.0\n30\n0.0\n9\n$PLIMMIN\n10\n0.0\n20\n0.0\n9\n$PLIMMAX\n10\n12.0\n20\n9.0\n9\n$UNITMODE\n70\n0\n9\n$VISRETAIN\n70\n1\n9\n$PLINEGEN\n70\n0\n9\n$PSLTSCALE\n70\n1\n9\n$TREEDEPTH\n70\n3020\n9\n$CMLSTYLE\n2\nStandard\n9\n$CMLJUST\n70\n0\n9\n$CMLSCALE\n40\n20.0\n9\n$PROXYGRAPHICS\n70\n1\n9\n$MEASUREMENT\n70\n1\n9\n$CELWEIGHT\n370\n-1\n9\n$ENDCAPS\n280\n0\n9\n$JOINSTYLE\n280\n0\n9\n$LWDISPLAY\n290\n0\n9\n$INSUNITS\n70\n4\n9\n$HYPERLINKBASE\n1\n\n9\n$STYLESHEET\n1\n\n9\n$XEDIT\n290\n1\n9\n$CEPSNTYPE\n380\n0\n9\n$PSTYLEMODE\n290\n1\n9\n$FINGERPRINTGUID\n2\n{DDD6D97E-BD55-224C-BA1C-3495DAAEF97F}\n9\n$VERSIONGUID\n2\n{7D5E9FB8-EB7E-244F-8BB9-1B0537338A97}\n9\n$EXTNAMES\n290\n1\n9\n$PSVPSCALE\n40\n0.0\n9\n$OLESTARTUP\n290\n0\n9\n$SORTENTS\n280\n127\n9\n$INDEXCTL\n280\n0\n9\n$HIDETEXT\n280\n1\n9\n$XCLIPFRAME\n280\n2\n9\n$HALOGAP\n280\n0\n9\n$OBSCOLOR\n70\n257\n9\n$OBSLTYPE\n280\n0\n9\n$INTERSECTIONDISPLAY\n280\n0\n9\n$INTERSECTIONCOLOR\n70\n257\n9\n$DIMASSOC\n280\n2\n9\n$PROJECTNAME\n1\n\n9\n$CAMERADISPLAY\n290\n0\n9\n$LENSLENGTH\n40\n50.0\n9\n$CAMERAHEIGHT\n40\n0.0\n9\n$STEPSPERSEC\n40\n2.0\n9\n$STEPSIZE\n40\n6.0\n9\n$3DDWFPREC\n40\n2.0\n9\n$PSOLWIDTH\n40\n5.0\n9\n$PSOLHEIGHT\n40\n80.0\n9\n$LOFTANG1\n40\n1.570796326794896\n9\n$LOFTANG2\n40\n1.570796326794896\n9\n$LOFTMAG1\n40\n0.0\n9\n$LOFTMAG2\n40\n0.0\n9\n$LOFTPARAM\n70\n7\n9\n$LOFTNORMALS\n280\n1\n9\n$LATITUDE\n40\n37.795\n9\n$LONGITUDE\n40\n-122.394\n9\n$NORTHDIRECTION\n40\n0.0\n9\n$TIMEZONE\n70\n-8000\n9\n$LIGHTGLYPHDISPLAY\n280\n1\n9\n$TILEMODELIGHTSYNCH\n280\n1\n9\n$CMATERIAL\n347\nEC\n9\n$SOLIDHIST\n280\n0\n9\n$SHOWHIST\n280\n1\n9\n$DWFFRAME\n280\n2\n9\n$DGNFRAME\n280\n0\n9\n$REALWORLDSCALE\n290\n1\n9\n$INTERFERECOLOR\n62\n1\n9\n$INTERFEREOBJVS\n345\nF9\n9\n$INTERFEREVPVS\n346\nF6\n9\n$CSHADOW\n280\n0\n9\n$SHADOWPLANELOCATION\n40\n0.0\n0\nENDSEC\n0\nSECTION\n2\nCLASSES\n0\nCLASS\n1\nACDBDICTIONARYWDFLT\n2\nAcDbDictionaryWithDefault\n3\nObjectDBX Classes\n90\n0\n91\n1\n280\n0\n281\n0\n0\nCLASS\n1\nDICTIONARYVAR\n2\nAcDbDictionaryVar\n3\nObjectDBX Classes\n90\n0\n91\n11\n280\n0\n281\n0\n0\nCLASS\n1\nTABLESTYLE\n2\nAcDbTableStyle\n3\nObjectDBX Classes\n90\n4095\n91\n1\n280\n0\n281\n0\n0\nCLASS\n1\nMATERIAL\n2\nAcDbMaterial\n3\nObjectDBX Classes\n90\n1153\n91\n3\n280\n0\n281\n0\n0\nCLASS\n1\nVISUALSTYLE\n2\nAcDbVisualStyle\n3\nObjectDBX Classes\n90\n4095\n91\n24\n280\n0\n281\n0\n0\nCLASS\n1\nSCALE\n2\nAcDbScale\n3\nObjectDBX Classes\n90\n1153\n91\n17\n280\n0\n281\n0\n0\nCLASS\n1\nMLEADERSTYLE\n2\nAcDbMLeaderStyle\n3\nACDB_MLEADERSTYLE_CLASS\n90\n4095\n91\n2\n280\n0\n281\n0\n0\nCLASS\n1\nCELLSTYLEMAP\n2\nAcDbCellStyleMap\n3\nObjectDBX Classes\n90\n1152\n91\n1\n280\n0\n281\n0\n0\nCLASS\n1\nEXACXREFPANELOBJECT\n2\nExAcXREFPanelObject\n3\nEXAC_ESW\n90\n1025\n91\n0\n280\n0\n281\n0\n0\nCLASS\n1\nNPOCOLLECTION\n2\nAcDbImpNonPersistentObjectsCollection\n3\nObjectDBX Classes\n90\n1153\n91\n0\n280\n0\n281\n0\n0\nCLASS\n1\nLAYER_INDEX\n2\nAcDbLayerIndex\n3\nObjectDBX Classes\n90\n0\n91\n0\n280\n0\n281\n0\n0\nCLASS\n1\nSPATIAL_INDEX\n2\nAcDbSpatialIndex\n3\nObjectDBX Classes\n90\n0\n91\n0\n280\n0\n281\n0\n0\nCLASS\n1\nIDBUFFER\n2\nAcDbIdBuffer\n3\nObjectDBX Classes\n90\n0\n91\n0\n280\n0\n281\n0\n0\nCLASS\n1\nACDBSECTIONVIEWSTYLE\n2\nAcDbSectionViewStyle\n3\nObjectDBX Classes\n90\n1025\n91\n1\n280\n0\n281\n0\n0\nCLASS\n1\nACDBDETAILVIEWSTYLE\n2\nAcDbDetailViewStyle\n3\nObjectDBX Classes\n90\n1025\n91\n1\n280\n0\n281\n0\n0\nENDSEC\n0\nSECTION\n2\nTABLES\n0\nTABLE\n2\nVPORT\n5\n8\n330\n0\n100\nAcDbSymbolTable\n70\n1\n1001\nACAD\n1000\nDbSaveVer\n1071\n105\n0\nVPORT\n5\nEA\n330\n8\n100\nAcDbSymbolTableRecord\n100\nAcDbViewportTableRecord\n2\n*Active\n70\n0\n10\n0.0\n20\n0.0\n11\n1.0\n21\n1.0\n12\n3327.895307793918\n22\n1440.684066268786\n13\n0.0\n23\n0.0\n14\n10.0\n24\n10.0\n15\n10.0\n25\n10.0\n16\n0.0\n26\n0.0\n36\n1.0\n17\n0.0\n27\n0.0\n37\n0.0\n40\n2560.967279253777\n41\n1.949874686716792\n42\n50.0\n43\n0.0\n44\n0.0\n50\n0.0\n51\n0.0\n71\n0\n72\n1000\n73\n1\n74\n3\n75\n0\n76\n1\n77\n0\n78\n0\n281\n0\n65\n1\n110\n0.0\n120\n0.0\n130\n0.0\n111\n1.0\n121\n0.0\n131\n0.0\n112\n0.0\n122\n1.0\n132\n0.0\n79\n0\n146\n0.0\n348\nF5\n60\n3\n61\n5\n292\n1\n282\n1\n141\n0.0\n142\n0.0\n63\n250\n421\n3355443\n1001\nACAD_NAV_VCDISPLAY\n1070\n3\n0\nENDTAB\n0\nTABLE\n2\nLTYPE\n5\n5\n330\n0\n100\nAcDbSymbolTable\n70\n1\n0\nLTYPE\n5\n14\n330\n5\n100\nAcDbSymbolTableRecord\n100\nAcDbLinetypeTableRecord\n2\nByBlock\n70\n0\n3\n\n72\n65\n73\n0\n40\n0.0\n0\nLTYPE\n5\n15\n330\n5\n100\nAcDbSymbolTableRecord\n100\nAcDbLinetypeTableRecord\n2\nByLayer\n70\n0\n3\n\n72\n65\n73\n0\n40\n0.0\n0\nLTYPE\n5\n16\n330\n5\n100\nAcDbSymbolTableRecord\n100\nAcDbLinetypeTableRecord\n2\nContinuous\n70\n0\n3\nSolid line\n72\n65\n73\n0\n40\n0.0\n0\nENDTAB\n0\nTABLE\n2\nLAYER\n5\n2\n330\n0\n100\nAcDbSymbolTable\n0\nLAYER\n5\n10\n330\n2\n100\nAcDbSymbolTableRecord\n100\nAcDbLayerTableRecord\n2\n0\n70\n0\n62\n7\n6\nContinuous\n370\n-3\n390\nF\n347\nEE\n348\n0\n";		
		
		//write Layer
		let layerIndexNum = 641;
		let imgDefNum = "";
		
		
		//layerNum 
		for (let layerName in this.layers){
			s += this.layers[layerName].toDxfString(layerIndexNum.toString(16));
			if(layerIndexNum==641){
				layerIndexNum+=4;
			}
			else{
				layerIndexNum++;
			}
		}
		
		//begin number of imgDef
		imgDefNum = (648*(layerIndexNum + 5)).toString(16);//躲避过所有的entities
		
		//imgdef own codeFive 
		for(let i=0; i<this.imageArray.length; i++){
			var imageDefObject = this.imageArray[i];
			imageDefObject.codeFive = imgDefNum;
			imgDefNum = (parseInt(imgDefNum,16) + 1).toString(16);
		}
		//write entites
		s+='0\nENDTAB\n0\nTABLE\n2\nSTYLE\n5\n3\n330\n0\n100\nAcDbSymbolTable\n70\n2\n0\nSTYLE\n5\n11\n330\n3\n100\nAcDbSymbolTableRecord\n100\nAcDbTextStyleTableRecord\n2\nStandard\n70\n0\n40\n0.0\n41\n1.0\n50\n0.0\n71\n0\n42\n2.5\n3\narial.ttf\n4\n\n1001\nACAD\n1000\nArial\n1071\n34\n0\nSTYLE\n5\n132\n330\n3\n100\nAcDbSymbolTableRecord\n100\nAcDbTextStyleTableRecord\n2\nAnnotative\n70\n0\n40\n0.0\n41\n1.0\n50\n0.0\n71\n0\n42\n2.5\n3\narial.ttf\n4\n\n1001\nAcadAnnotative\n1000\nAnnotativeData\n1002\n{\n1070\n1\n1070\n1\n1002\n}\n1001\nACAD\n1000\nArial\n1071\n34\n0\nENDTAB\n0\nTABLE\n2\nVIEW\n5\n6\n330\n0\n100\nAcDbSymbolTable\n70\n0\n0\nENDTAB\n0\nTABLE\n2\nUCS\n5\n7\n330\n0\n100\nAcDbSymbolTable\n70\n0\n0\nENDTAB\n0\nTABLE\n2\nAPPID\n5\n9\n330\n0\n100\nAcDbSymbolTable\n70\n11\n0\nAPPID\n5\n12\n330\n9\n100\nAcDbSymbolTableRecord\n100\nAcDbRegAppTableRecord\n2\nACAD\n70\n0\n0\nAPPID\n5\n9E\n330\n9\n100\nAcDbSymbolTableRecord\n100\nAcDbRegAppTableRecord\n2\nACAD_PSEXT\n70\n0\n0\nAPPID\n5\n133\n330\n9\n100\nAcDbSymbolTableRecord\n100\nAcDbRegAppTableRecord\n2\nAcadAnnoPO\n70\n0\n0\nAPPID\n5\n134\n330\n9\n100\nAcDbSymbolTableRecord\n100\nAcDbRegAppTableRecord\n2\nAcadAnnotative\n70\n0\n0\nAPPID\n5\n135\n330\n9\n100\nAcDbSymbolTableRecord\n100\nAcDbRegAppTableRecord\n2\nACAD_DSTYLE_DIMJAG\n70\n0\n0\nAPPID\n5\n136\n330\n9\n100\nAcDbSymbolTableRecord\n100\nAcDbRegAppTableRecord\n2\nACAD_DSTYLE_DIMTALN\n70\n0\n0\nAPPID\n5\n165\n330\n9\n100\nAcDbSymbolTableRecord\n100\nAcDbRegAppTableRecord\n2\nACAD_MLEADERVER\n70\n0\n0\nAPPID\n5\n217\n330\n9\n100\nAcDbSymbolTableRecord\n100\nAcDbRegAppTableRecord\n2\nACAD_NAV_VCDISPLAY\n70\n0\n0\nAPPID\n5\n282\n330\n9\n100\nAcDbSymbolTableRecord\n100\nAcDbRegAppTableRecord\n2\nAcAecLayerStandard\n70\n0\n0\nAPPID\n5\n283\n330\n9\n100\nAcDbSymbolTableRecord\n100\nAcDbRegAppTableRecord\n2\nAcCmTransparency\n70\n0\n0\nAPPID\n5\n284\n330\n9\n100\nAcDbSymbolTableRecord\n100\nAcDbRegAppTableRecord\n2\nACAD_EXEMPT_FROM_CAD_STANDARDS\n70\n0\n0\nENDTAB\n0\nTABLE\n2\nDIMSTYLE\n5\nA\n330\n0\n100\nAcDbSymbolTable\n70\n4\n100\nAcDbDimStyleTable\n71\n2\n340\n27\n340\n137\n0\nDIMSTYLE\n105\n1B0\n330\nA\n100\nAcDbSymbolTableRecord\n100\nAcDbDimStyleTableRecord\n2\nStandard\n70\n0\n340\n11\n0\nDIMSTYLE\n105\n137\n330\nA\n100\nAcDbSymbolTableRecord\n100\nAcDbDimStyleTableRecord\n2\nAnnotative\n70\n0\n40\n0.0\n41\n2.5\n42\n0.625\n43\n3.75\n44\n1.25\n73\n0\n74\n0\n77\n1\n78\n8\n140\n2.5\n141\n2.5\n143\n0.03937007874016\n147\n0.625\n171\n3\n172\n1\n271\n2\n272\n2\n274\n3\n278\n44\n283\n0\n284\n8\n340\n11\n1001\nAcadAnnotative\n1000\nAnnotativeData\n1002\n{\n1070\n1\n1070\n1\n1002\n}\n1001\nACAD_DSTYLE_DIMJAG\n1070\n388\n1040\n1.5\n1001\nACAD_DSTYLE_DIMTALN\n1070\n392\n1070\n0\n0\nDIMSTYLE\n105\n27\n330\nA\n100\nAcDbSymbolTableRecord\n100\nAcDbDimStyleTableRecord\n2\nISO-25\n70\n0\n41\n2.5\n42\n0.625\n43\n3.75\n44\n1.25\n73\n0\n74\n0\n77\n1\n78\n8\n140\n2.5\n141\n2.5\n143\n0.03937007874016\n147\n0.625\n171\n3\n172\n1\n271\n2\n272\n2\n274\n3\n278\n44\n283\n0\n284\n8\n340\n11\n0\nENDTAB\n0\nTABLE\n2\nBLOCK_RECORD\n5\n1\n330\n0\n100\nAcDbSymbolTable\n70\n2\n0\nBLOCK_RECORD\n5\n1F\n102\n{ACAD_XDICTIONARY\n360\n1CE\n102\n}\n330\n1\n100\nAcDbSymbolTableRecord\n100\nAcDbBlockTableRecord\n2\n*Model_Space\n340\n22\n70\n0\n280\n1\n281\n0\n0\nBLOCK_RECORD\n5\nD2\n330\n1\n100\nAcDbSymbolTableRecord\n100\nAcDbBlockTableRecord\n2\n*Paper_Space\n340\nD3\n70\n0\n280\n1\n281\n0\n0\nBLOCK_RECORD\n5\nD6\n330\n1\n100\nAcDbSymbolTableRecord\n100\nAcDbBlockTableRecord\n2\n*Paper_Space0\n340\nD7\n70\n0\n280\n1\n281\n0\n0\nENDTAB\n0\nENDSEC\n0\nSECTION\n2\nBLOCKS\n0\nBLOCK\n5\n20\n330\n1F\n100\nAcDbEntity\n8\n0\n100\nAcDbBlockBegin\n2\n*Model_Space\n70\n0\n10\n0.0\n20\n0.0\n30\n0.0\n3\n*Model_Space\n1\n\n0\nENDBLK\n5\n21\n330\n1F\n100\nAcDbEntity\n8\n0\n100\nAcDbBlockEnd\n0\nBLOCK\n5\nD4\n330\nD2\n100\nAcDbEntity\n67\n1\n8\n0\n100\nAcDbBlockBegin\n2\n*Paper_Space\n70\n0\n10\n0.0\n20\n0.0\n30\n0.0\n3\n*Paper_Space\n1\n\n0\nENDBLK\n5\nD5\n330\nD2\n100\nAcDbEntity\n67\n1\n8\n0\n100\nAcDbBlockEnd\n0\nBLOCK\n5\nD8\n330\nD6\n100\nAcDbEntity\n67\n1\n8\n0\n100\nAcDbBlockBegin\n2\n*Paper_Space0\n70\n0\n10\n0.0\n20\n0.0\n30\n0.0\n3\n*Paper_Space0\n1\n\n0\nENDBLK\n5\nD9\n330\nD6\n100\nAcDbEntity\n67\n1\n8\n0\n100\nAcDbBlockEnd\n0\nENDSEC\n0\nSECTION\n2\nENTITIES\n';
		let layerNum = 1;
		let imageDefArray = [];
		
		
		for (let layerName in this.layers){
		    let layer = this.layers[layerName];
			//console.log(this.layers[layerName]);
		    s += layer.shapeToString(layerNum,this.imageArray);
			layerNum++;
		    // let shapes = layer.getShapes();
		}
		
		//end string 1
		s+='0\nENDSEC\n0\nSECTION\n2\nOBJECTS\n0\nDICTIONARY\n5\nC\n330\n0\n100\nAcDbDictionary\n281\n1\n3\nACAD_CIP_PREVIOUS_PRODUCT_INFO\n350\n216\n3\nACAD_COLOR\n350\n6B\n3\nACAD_DETAILVIEWSTYLE\n350\n21B\n3\nACAD_GROUP\n350\nD\n3\nACAD_LAYOUT\n350\n1A\n3\nACAD_MATERIAL\n350\n6A\n3\nACAD_MLEADERSTYLE\n350\n12D\n3\nACAD_MLINESTYLE\n350\n17\n3\nACAD_PLOTSETTINGS\n350\n19\n3\nACAD_PLOTSTYLENAME\n350\nE\n3\nACAD_SCALELIST\n350\n10C\n3\nACAD_SECTIONVIEWSTYLE\n350\n219\n3\nACAD_TABLESTYLE\n350\n7E\n3\nACAD_VISUALSTYLE\n350\nEF\n3\nACDB_RECOMPOSE_DATA\n350\n28A\n3\nAcDbVariableDictionary\n350\n5E\n3\nAcDsDecomposeData\n350\n290\n0\nDICTIONARY\n5\n1FF\n330\n2\n100\nAcDbDictionary\n280\n1\n281\n1\n3\nACAD_LAYERSTATES\n360\n200\n0\nDICTIONARY\n5\n13C\n330\n10\n100\nAcDbDictionary\n280\n1\n281\n1\n0\nDICTIONARY\n5\n1CE\n330\n1F\n100\nAcDbDictionary\n280\n1\n281\n1\n0\nXRECORD\n5\n216\n102\n{ACAD_REACTORS\n330\nC\n102\n}\n330\nC\n100\nAcDbXrecord\n280\n1\n300\nACD\n300\n2019\n300\nACD_F_S_TL\n0\nDICTIONARY\n5\n6B\n102\n{ACAD_REACTORS\n330\nC\n102\n}\n330\nC\n100\nAcDbDictionary\n281\n1\n0\nDICTIONARY\n5\n21B\n102\n{ACAD_REACTORS\n330\nC\n102\n}\n330\nC\n100\nAcDbDictionary\n281\n1\n3\nMetric50\n350\n21C\n0\nDICTIONARY\n5\nD\n102\n{ACAD_REACTORS\n330\nC\n102\n}\n330\nC\n100\nAcDbDictionary\n281\n1\n0\nDICTIONARY\n5\n1A\n102\n{ACAD_REACTORS\n330\nC\n102\n}\n330\nC\n100\nAcDbDictionary\n281\n1\n3\nModel\n350\n22\n3\n布局1\n350\nD3\n3\n布局2\n350\nD7\n0\nDICTIONARY\n5\n6A\n102\n{ACAD_REACTORS\n330\nC\n102\n}\n330\nC\n100\nAcDbDictionary\n281\n1\n3\nByBlock\n350\nED\n3\nByLayer\n350\nEC\n3\nGlobal\n350\nEE\n0\nDICTIONARY\n5\n12D\n102\n{ACAD_REACTORS\n330\nC\n102\n}\n330\nC\n100\nAcDbDictionary\n281\n1\n3\nAnnotative\n350\n13B\n3\nStandard\n350\n12E\n0\nDICTIONARY\n5\n17\n102\n{ACAD_REACTORS\n330\nC\n102\n}\n330\nC\n100\nAcDbDictionary\n281\n1\n3\nStandard\n350\n18\n0\nDICTIONARY\n5\n19\n102\n{ACAD_REACTORS\n330\nC\n102\n}\n330\nC\n100\nAcDbDictionary\n281\n1\n0\nACDBDICTIONARYWDFLT\n5\nE\n102\n{ACAD_REACTORS\n330\nC\n102\n}\n330\nC\n100\nAcDbDictionary\n281\n1\n3\nNormal\n350\nF\n100\nAcDbDictionaryWithDefault\n340\nF\n0\nDICTIONARY\n5\n10C\n102\n{ACAD_REACTORS\n330\nC\n102\n}\n330\nC\n100\nAcDbDictionary\n281\n1\n3\nA0\n350\n10D\n3\nA1\n350\n1BE\n3\nA2\n350\n1BF\n3\nA3\n350\n1C0\n3\nA4\n350\n1C1\n3\nA5\n350\n1C2\n3\nA6\n350\n1C3\n3\nA7\n350\n1C4\n3\nA8\n350\n1C5\n3\nA9\n350\n1C6\n3\nB0\n350\n1C7\n3\nB1\n350\n1C8\n3\nB2\n350\n1C9\n3\nB3\n350\n1CA\n3\nB4\n350\n1CB\n3\nB5\n350\n1CC\n3\nB6\n350\n1CD\n0\nDICTIONARY\n5\n219\n102\n{ACAD_REACTORS\n330\nC\n102\n}\n330\nC\n100\nAcDbDictionary\n281\n1\n3\nMetric50\n350\n21A\n0\nDICTIONARY\n5\n7E\n102\n{ACAD_REACTORS\n330\nC\n102\n}\n330\nC\n100\nAcDbDictionary\n281\n1\n3\nStandard\n350\n7F\n0\nDICTIONARY\n5\nEF\n102\n{ACAD_REACTORS\n330\nC\n102\n}\n330\nC\n100\nAcDbDictionary\n281\n1\n3\n2dWireframe\n350\nF5\n3\nBasic\n350\nF4\n3\nBrighten\n350\nFB\n3\nColorChange\n350\nFF\n3\nConceptual\n350\nF8\n3\nDim\n350\nFA\n3\nEdgeColorOff\n350\n1E6\n3\nFacepattern\n350\nFE\n3\nFlat\n350\nF0\n3\nFlatWithEdges\n350\nF1\n3\nGouraud\n350\nF2\n3\nGouraudWithEdges\n350\nF3\n3\nHidden\n350\nF7\n3\nJitterOff\n350\n1E4\n3\nLinepattern\n350\nFD\n3\nOverhangOff\n350\n1E5\n3\nRealistic\n350\nF9\n3\nShaded\n350\n1F3\n3\nShadedwithedges\n350\n1F2\n3\nShadesofGray\n350\n1EF\n3\nSketchy\n350\n1F0\n3\nThicken\n350\nFC\n3\nWireframe\n350\nF6\n3\nX-Ray\n350\n1F1\n0\nXRECORD\n5\n28A\n102\n{ACAD_REACTORS\n330\nC\n102\n}\n330\nC\n100\nAcDbXrecord\n280\n1\n90\n1\n330\n7F\n0\nDICTIONARY\n5\n5E\n102\n{ACAD_REACTORS\n330\nC\n102\n}\n330\nC\n100\nAcDbDictionary\n281\n1\n3\nCANNOSCALE\n350\n146\n3\nCENTEREXE\n350\n259\n3\nCENTERLTYPEFILE\n350\n25A\n3\nCMLEADERSTYLE\n350\n145\n3\nCTABLESTYLE\n350\n84\n3\nCVIEWDETAILSTYLE\n350\n227\n3\nCVIEWSECTIONSTYLE\n350\n228\n3\nDIMASSOC\n350\n5F\n3\nHIDETEXT\n350\n63\n3\nLAYEREVAL\n350\n1AE\n3\nLAYERNOTIFY\n350\n1AF\n0\nDICTIONARY\n5\n290\n102\n{ACAD_REACTORS\n330\nC\n102\n}\n330\nC\n100\nAcDbDictionary\n281\n1\n3\nAcDsRecords\n350\n292\n3\nAcDsSchemas\n350\n291\n1001\nACAD\n1070\n2\n0\nDICTIONARY\n5\n200\n102\n{ACAD_REACTORS\n330\n1FF\n102\n}\n330\n1FF\n100\nAcDbDictionary\n281\n1\n0\nACDBDETAILVIEWSTYLE\n5\n21C\n102\n{ACAD_XDICTIONARY\n360\n295\n102\n}\n102\n{ACAD_REACTORS\n330\n21B\n102\n}\n330\n21B\n100\nAcDbModelDocViewStyle\n70\n0\n3\nMetric50\n290\n0\n100\nAcDbDetailViewStyle\n70\n0\n71\n0\n90\n3\n71\n1\n340\n11\n62\n256\n40\n5.0\n340\n0\n62\n256\n40\n5.0\n300\n\n40\n0.0\n280\n1\n71\n2\n340\n16\n90\n25\n62\n256\n71\n3\n340\n11\n62\n256\n40\n5.0\n90\n0\n40\n15.0\n90\n1\n300\n';
		
		s+='%<\\AcVarViewDetailId>%(%<\\AcVarViewScale\\f"%sn">%)\n';
		
		s+='71\n4\n340\n16\n90\n25\n62\n256\n340\n16\n90\n25\n62\n256\n280\n0\n';
		
		//插入图片def
		for(let i=0; i<this.imageArray.length; i++){
			let currentImageDef = this.imageArray[i];
			s += currentImageDef.imageToDxfString();
		}
		s += '0\nLAYOUT\n5\n22\n102\n{ACAD_XDICTIONARY\n360\n205\n102\n}\n102\n{ACAD_REACTORS\n330\n1A\n102\n}\n330\n1A\n100\nAcDbPlotSettings\n1\n\n2\nnone_device\n4\nISO_A4_(210.00_x_297.00_MM)\n6\n\n40\n7.5\n41\n20.0\n42\n7.5\n43\n20.0\n44\n210.0\n45\n297.0\n46\n11.54999923706054\n47\n-13.65000009536743\n48\n0.0\n49\n0.0\n140\n0.0\n141\n0.0\n142\n1.0\n143\n8.704084754739808\n70\n11952\n72\n1\n73\n0\n74\n0\n7\n\n75\n0\n147\n0.1148885871608098\n76\n0\n77\n2\n78\n300\n148\n0.0\n149\n0.0\n100\nAcDbLayout\n1\nModel\n70\n1\n71\n0\n10\n0.0\n20\n0.0\n11\n12.0\n21\n9.0\n12\n0.0\n22\n0.0\n32\n0.0\n14\n0.0\n24\n0.0\n34\n0.0\n15\n0.0\n25\n0.0\n35\n0.0\n146\n0.0\n13\n0.0\n23\n0.0\n33\n0.0\n16\n1.0\n26\n0.0\n36\n0.0\n17\n0.0\n27\n1.0\n37\n0.0\n76\n0\n330\n1F\n331\nEA\n1001\nACAD_PSEXT\n1000\nNone\n1000\nNone\n1000\nNotapplicable\n1000\nThelayoutwillnotbeplottedunlessanewplotterconfigurationnameisselected.\n1070\n0\n0\nLAYOUT\n5\nD3\n102\n{ACAD_REACTORS\n330\n1A\n102\n}\n330\n1A\n100\nAcDbPlotSettings\n1\n\n2\n';
		
		s+='C:\\DocumentsandSettings\\basas\\ApplicationData\\Autodesk\\AutoCAD2005\\R16.1\\enu\\plotters\\DefaultWindowsSystemPrinter.pc3\n';
		
		s+='4\n\n6\n\n40\n0.0\n41\n0.0\n42\n0.0\n43\n0.0\n44\n0.0\n45\n0.0\n46\n0.0\n47\n0.0\n48\n0.0\n49\n0.0\n140\n0.0\n141\n0.0\n142\n1.0\n143\n1.0\n70\n688\n72\n0\n73\n0\n74\n5\n7\n\n75\n16\n147\n1.0\n76\n0\n77\n2\n78\n300\n148\n0.0\n149\n0.0\n100\nAcDbLayout\n1\n布局1\n70\n1\n71\n1\n10\n0.0\n20\n0.0\n11\n12.0\n21\n9.0\n12\n0.0\n22\n0.0\n32\n0.0\n14\n0.0\n24\n0.0\n34\n0.0\n15\n0.0\n25\n0.0\n35\n0.0\n146\n0.0\n13\n0.0\n23\n0.0\n33\n0.0\n16\n1.0\n26\n0.0\n36\n0.0\n17\n0.0\n27\n1.0\n37\n0.0\n76\n0\n330\nD2\n0\nLAYOUT\n5\nD7\n102\n{ACAD_REACTORS\n330\n1A\n102\n}\n330\n1A\n100\nAcDbPlotSettings\n1\n\n2\n';
		
		s+='C:\\DocumentsandSettings\\basas\\ApplicationData\\Autodesk\\AutoCAD2005\\R16.1\\enu\\plotters\\DefaultWindowsSystemPrinter.pc3\n';
		
		s+='4\n\n6\n\n40\n0.0\n41\n0.0\n42\n0.0\n43\n0.0\n44\n0.0\n45\n0.0\n46\n0.0\n47\n0.0\n48\n0.0\n49\n0.0\n140\n0.0\n141\n0.0\n142\n1.0\n143\n1.0\n70\n688\n72\n0\n73\n0\n74\n5\n7\n\n75\n16\n147\n1.0\n76\n0\n77\n2\n78\n300\n148\n0.0\n149\n0.0\n100\nAcDbLayout\n1\n布局2\n70\n1\n71\n2\n10\n0.0\n20\n0.0\n11\n12.0\n21\n9.0\n12\n0.0\n22\n0.0\n32\n0.0\n14\n0.0\n24\n0.0\n34\n0.0\n15\n0.0\n25\n0.0\n35\n0.0\n146\n0.0\n13\n0.0\n23\n0.0\n33\n0.0\n16\n1.0\n26\n0.0\n36\n0.0\n17\n0.0\n27\n1.0\n37\n0.0\n76\n0\n330\nD6\n0\nMATERIAL\n5\nED\n102\n{ACAD_XDICTIONARY\n360\n1F9\n102\n}\n102\n{ACAD_REACTORS\n330\n6A\n102\n}\n330\n6A\n100\nAcDbMaterial\n1\nByBlock\n94\n63\n0\nMATERIAL\n5\nEC\n102\n{ACAD_XDICTIONARY\n360\n1F7\n102\n}\n102\n{ACAD_REACTORS\n330\n6A\n102\n}\n330\n6A\n100\nAcDbMaterial\n1\nByLayer\n94\n63\n0\nMATERIAL\n5\nEE\n102\n{ACAD_XDICTIONARY\n360\n173\n102\n}\n102\n{ACAD_REACTORS\n330\n6A\n102\n}\n330\n6A\n100\nAcDbMaterial\n1\nGlobal\n43\n0.0007999999797903\n43\n0.0\n43\n0.0\n43\n0.0\n43\n0.0\n43\n0.0007999999797903\n43\n0.0\n43\n0.0\n43\n0.0\n43\n0.0\n43\n1.0\n43\n0.0\n43\n0.0\n43\n0.0\n43\n0.0\n43\n1.0\n49\n0.0007999999797903\n49\n0.0\n49\n0.0\n49\n0.0\n49\n0.0\n49\n0.0007999999797903\n49\n0.0\n49\n0.0\n49\n0.0\n49\n0.0\n49\n1.0\n49\n0.0\n49\n0.0\n49\n0.0\n49\n0.0\n49\n1.0\n142\n0.0007999999797903\n142\n0.0\n142\n0.0\n142\n0.0\n142\n0.0\n142\n0.0007999999797903\n142\n0.0\n142\n0.0\n142\n0.0\n142\n0.0\n142\n1.0\n142\n0.0\n142\n0.0\n142\n0.0\n142\n0.0\n142\n1.0\n144\n0.0007999999797903\n144\n0.0\n144\n0.0\n144\n0.0\n144\n0.0\n144\n0.0007999999797903\n144\n0.0\n144\n0.0\n144\n0.0\n144\n0.0\n144\n1.0\n144\n0.0\n144\n0.0\n144\n0.0\n144\n0.0\n144\n1.0\n94\n63\n1001\nACAD\n1070\n-1\n1070\n3\n1070\n0\n1000\n\n1071\n0\n1070\n0\n0\nMLEADERSTYLE\n5\n13B\n102\n{ACAD_REACTORS\n330\n12D\n102\n}\n330\n12D\n100\nAcDbMLeaderStyle\n179\n2\n170\n2\n171\n1\n172\n0\n90\n2\n40\n0.0\n41\n0.0\n173\n1\n91\n-1056964608\n340\n14\n92\n-2\n290\n1\n42\n2.0\n291\n1\n43\n8.0\n3\nStandard\n44\n4.0\n300\n\n342\n11\n174\n1\n178\n1\n175\n1\n176\n0\n93\n-1056964608\n45\n4.0\n292\n0\n297\n0\n46\n4.0\n94\n-1056964608\n47\n1.0\n49\n1.0\n140\n1.0\n293\n1\n141\n0.0\n294\n1\n177\n0\n142\n1.0\n295\n0\n296\n1\n143\n3.75\n271\n0\n272\n9\n273\n9\n298\n0\n0\nMLEADERSTYLE\n5\n12E\n102\n{ACAD_REACTORS\n330\n12D\n102\n}\n330\n12D\n100\nAcDbMLeaderStyle\n179\n2\n170\n2\n171\n1\n172\n0\n90\n2\n40\n0.0\n41\n0.0\n173\n1\n91\n-1056964608\n340\n14\n92\n-2\n290\n1\n42\n2.0\n291\n1\n43\n8.0\n3\nStandard\n44\n4.0\n300\n\n342\n11\n174\n1\n178\n1\n175\n1\n176\n0\n93\n-1056964608\n45\n4.0\n292\n0\n297\n0\n46\n4.0\n94\n-1056964608\n47\n1.0\n49\n1.0\n140\n1.0\n293\n1\n141\n0.0\n294\n1\n177\n0\n142\n1.0\n295\n0\n296\n0\n143\n3.75\n271\n0\n272\n9\n273\n9\n298\n0\n0\nMLINESTYLE\n5\n18\n102\n{ACAD_REACTORS\n330\n17\n102\n}\n330\n17\n100\nAcDbMlineStyle\n2\nSTANDARD\n70\n0\n3\n\n62\n256\n51\n90.0\n52\n90.0\n71\n2\n49\n0.5\n62\n256\n6\nBYLAYER\n49\n-0.5\n62\n256\n6\nBYLAYER\n0\nACDBPLACEHOLDER\n5\nF\n102\n{ACAD_REACTORS\n330\nE\n102\n}\n330\nE\n0\nSCALE\n5\n10D\n102\n{ACAD_REACTORS\n330\n10C\n102\n}\n330\n10C\n100\nAcDbScale\n70\n0\n300\n1:1\n140\n1.0\n141\n1.0\n290\n1\n0\nSCALE\n5\n1BE\n102\n{ACAD_REACTORS\n330\n10C\n102\n}\n330\n10C\n100\nAcDbScale\n70\n0\n300\n1:2\n140\n1.0\n141\n2.0\n290\n0\n0\nSCALE\n5\n1BF\n102\n{ACAD_REACTORS\n330\n10C\n102\n}\n330\n10C\n100\nAcDbScale\n70\n0\n300\n1:4\n140\n1.0\n141\n4.0\n290\n0\n0\nSCALE\n5\n1C0\n102\n{ACAD_REACTORS\n330\n10C\n102\n}\n330\n10C\n100\nAcDbScale\n70\n0\n300\n1:5\n140\n1.0\n141\n5.0\n290\n0\n0\nSCALE\n5\n1C1\n102\n{ACAD_REACTORS\n330\n10C\n102\n}\n330\n10C\n100\nAcDbScale\n70\n0\n300\n1:8\n140\n1.0\n141\n8.0\n290\n0\n0\nSCALE\n5\n1C2\n102\n{ACAD_REACTORS\n330\n10C\n102\n}\n330\n10C\n100\nAcDbScale\n70\n0\n300\n1:10\n140\n1.0\n141\n10.0\n290\n0\n0\nSCALE\n5\n1C3\n102\n{ACAD_REACTORS\n330\n10C\n102\n}\n330\n10C\n100\nAcDbScale\n70\n0\n300\n1:16\n140\n1.0\n141\n16.0\n290\n0\n0\nSCALE\n5\n1C4\n102\n{ACAD_REACTORS\n330\n10C\n102\n}\n330\n10C\n100\nAcDbScale\n70\n0\n300\n1:20\n140\n1.0\n141\n20.0\n290\n0\n0\nSCALE\n5\n1C5\n102\n{ACAD_REACTORS\n330\n10C\n102\n}\n330\n10C\n100\nAcDbScale\n70\n0\n300\n1:30\n140\n1.0\n141\n30.0\n290\n0\n0\nSCALE\n5\n1C6\n102\n{ACAD_REACTORS\n330\n10C\n102\n}\n330\n10C\n100\nAcDbScale\n70\n0\n300\n1:40\n140\n1.0\n141\n40.0\n290\n0\n0\nSCALE\n5\n1C7\n102\n{ACAD_REACTORS\n330\n10C\n102\n}\n330\n10C\n100\nAcDbScale\n70\n0\n300\n1:50\n140\n1.0\n141\n50.0\n290\n0\n0\nSCALE\n5\n1C8\n102\n{ACAD_REACTORS\n330\n10C\n102\n}\n330\n10C\n100\nAcDbScale\n70\n0\n300\n1:100\n140\n1.0\n141\n100.0\n290\n0\n0\nSCALE\n5\n1C9\n102\n{ACAD_REACTORS\n330\n10C\n102\n}\n330\n10C\n100\nAcDbScale\n70\n0\n300\n2:1\n140\n2.0\n141\n1.0\n290\n0\n0\nSCALE\n5\n1CA\n102\n{ACAD_REACTORS\n330\n10C\n102\n}\n330\n10C\n100\nAcDbScale\n70\n0\n300\n4:1\n140\n4.0\n141\n1.0\n290\n0\n0\nSCALE\n5\n1CB\n102\n{ACAD_REACTORS\n330\n10C\n102\n}\n330\n10C\n100\nAcDbScale\n70\n0\n300\n8:1\n140\n8.0\n141\n1.0\n290\n0\n0\nSCALE\n5\n1CC\n102\n{ACAD_REACTORS\n330\n10C\n102\n}\n330\n10C\n100\nAcDbScale\n70\n0\n300\n10:1\n140\n10.0\n141\n1.0\n290\n0\n0\nSCALE\n5\n1CD\n102\n{ACAD_REACTORS\n330\n10C\n102\n}\n330\n10C\n100\nAcDbScale\n70\n0\n300\n100:1\n140\n100.0\n141\n1.0\n290\n0\n0\nACDBSECTIONVIEWSTYLE\n5\n21A\n102\n{ACAD_XDICTIONARY\n360\n293\n102\n}\n102\n{ACAD_REACTORS\n330\n219\n102\n}\n330\n219\n100\nAcDbModelDocViewStyle\n70\n0\n3\nMetric50\n290\n0\n100\nAcDbSectionViewStyle\n70\n0\n71\n0\n90\n102\n71\n1\n340\n11\n62\n256\n40\n5.0\n340\n0\n340\n0\n62\n256\n40\n5.0\n300\nI,O,Q,S,X,Z\n40\n10.0\n90\n0\n40\n2.5\n90\n0\n71\n2\n340\n16\n90\n25\n62\n256\n340\n16\n90\n50\n62\n256\n40\n5.0\n40\n2.5\n40\n5.0\n71\n3\n340\n11\n62\n256\n40\n5.0\n90\n0\n40\n15.0\n90\n1\n300\n';
		
		s+='%<\\AcVarViewSectionStartId>%-%<\\AcVarViewSectionEndId>%(%<\\AcVarViewScale\\f"%sn">%)\n';
		
		s+='71\n4\n62\n256\n62\n257\n300\nANSI31\n40\n1.0\n90\n0\n290\n0\n290\n0\n90\n6\n40\n0.0\n40\n1.570796326794896\n40\n0.2617993877991494\n40\n1.308996938995747\n40\n-0.2617993877991494\n40\n1.832595714594046\n0\nTABLESTYLE\n5\n7F\n102\n{ACAD_XDICTIONARY\n360\n162\n102\n}\n102\n{ACAD_REACTORS\n330\n7E\n102\n}\n330\n7E\n100\nAcDbTableStyle\n280\n0\n3\nStandard\n70\n0\n71\n0\n40\n1.5\n41\n1.5\n280\n0\n281\n0\n7\nStandard\n140\n4.5\n170\n2\n62\n0\n63\n7\n283\n0\n90\n512\n91\n0\n1\n\n274\n-2\n284\n1\n64\n0\n275\n-2\n285\n1\n65\n0\n276\n-2\n286\n1\n66\n0\n277\n-2\n287\n1\n67\n0\n278\n-2\n288\n1\n68\n0\n279\n-2\n289\n1\n69\n0\n7\nStandard\n140\n6.0\n170\n5\n62\n0\n63\n7\n283\n0\n90\n512\n91\n0\n1\n\n274\n-2\n284\n1\n64\n0\n275\n-2\n285\n1\n65\n0\n276\n-2\n286\n1\n66\n0\n277\n-2\n287\n1\n67\n0\n278\n-2\n288\n1\n68\n0\n279\n-2\n289\n1\n69\n0\n7\nStandard\n140\n4.5\n170\n5\n62\n0\n63\n7\n283\n0\n90\n512\n91\n0\n1\n\n274\n-2\n284\n1\n64\n0\n275\n-2\n285\n1\n65\n0\n276\n-2\n286\n1\n66\n0\n277\n-2\n287\n1\n67\n0\n278\n-2\n288\n1\n68\n0\n279\n-2\n289\n1\n69\n0\n0\nVISUALSTYLE\n5\nF5\n102\n{ACAD_REACTORS\n330\nEF\n102\n}\n330\nEF\n100\nAcDbVisualStyle\n2\n2dWireframe\n70\n4\n177\n3\n291\n0\n70\n58\n90\n0\n176\n1\n90\n2\n176\n1\n90\n1\n176\n1\n90\n0\n176\n1\n40\n0.6\n176\n1\n40\n30.0\n176\n1\n62\n7\n420\n16777215\n176\n1\n90\n1\n176\n1\n90\n4\n176\n1\n62\n7\n176\n1\n62\n257\n176\n1\n90\n1\n176\n1\n90\n1\n176\n1\n40\n1.0\n176\n1\n90\n0\n176\n1\n62\n257\n176\n1\n40\n1.0\n176\n1\n90\n1\n176\n1\n90\n6\n176\n1\n90\n2\n176\n1\n62\n7\n176\n1\n90\n5\n176\n1\n90\n0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n90\n1\n176\n1\n40\n0.0\n176\n1\n90\n0\n176\n1\n290\n1\n176\n1\n290\n1\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n40\n0.0\n176\n1\n40\n1.0\n176\n1\n90\n0\n176\n1\n62\n18\n420\n0\n176\n1\n90\n50\n176\n1\n90\n3\n176\n1\n62\n5\n420\n255\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n62\n256\n176\n0\n40\n1.0\n176\n0\n90\n2\n176\n1\n1\nstrokes_ogs.tif\n176\n1\n290\n0\n176\n1\n40\n1.0\n176\n1\n40\n1.0\n176\n1\n1001\nACAD\n1000\nAcDbSavedByObjectVersion\n1070\n0\n0\nVISUALSTYLE\n5\nF4\n102\n{ACAD_REACTORS\n330\nEF\n102\n}\n330\nEF\n100\nAcDbVisualStyle\n2\nBasic\n70\n7\n177\n3\n291\n1\n70\n58\n90\n1\n176\n1\n90\n0\n176\n1\n90\n1\n176\n1\n90\n0\n176\n1\n40\n0.6\n176\n1\n40\n30.0\n176\n1\n62\n7\n420\n16777215\n176\n1\n90\n0\n176\n1\n90\n4\n176\n1\n62\n7\n176\n1\n62\n257\n176\n1\n90\n1\n176\n1\n90\n1\n176\n1\n40\n1.0\n176\n1\n90\n8\n176\n1\n62\n7\n176\n1\n40\n1.0\n176\n1\n90\n1\n176\n1\n90\n6\n176\n1\n90\n2\n176\n1\n62\n7\n176\n1\n90\n5\n176\n1\n90\n0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n90\n1\n176\n1\n40\n0.0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n290\n1\n176\n1\n290\n1\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n40\n0.0\n176\n1\n40\n1.0\n176\n1\n90\n0\n176\n1\n62\n18\n420\n0\n176\n1\n90\n50\n176\n1\n90\n3\n176\n1\n62\n5\n420\n255\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n62\n256\n176\n0\n40\n1.0\n176\n0\n90\n2\n176\n1\n1\nstrokes_ogs.tif\n176\n1\n290\n0\n176\n1\n40\n1.0\n176\n1\n40\n1.0\n176\n1\n1001\nACAD\n1000\nAcDbSavedByObjectVersion\n1070\n0\n0\nVISUALSTYLE\n5\nFB\n102\n{ACAD_REACTORS\n330\nEF\n102\n}\n330\nEF\n100\nAcDbVisualStyle\n2\nBrighten\n70\n12\n177\n3\n291\n1\n70\n58\n90\n2\n176\n1\n90\n2\n176\n1\n90\n1\n176\n1\n90\n0\n176\n1\n40\n0.6\n176\n1\n40\n30.0\n176\n1\n62\n7\n420\n16777215\n176\n1\n90\n1\n176\n1\n90\n4\n176\n1\n62\n7\n176\n1\n62\n257\n176\n1\n90\n1\n176\n1\n90\n1\n176\n1\n40\n1.0\n176\n1\n90\n8\n176\n1\n62\n7\n176\n1\n40\n1.0\n176\n1\n90\n1\n176\n1\n90\n6\n176\n1\n90\n2\n176\n1\n62\n7\n176\n1\n90\n5\n176\n1\n90\n0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n90\n1\n176\n1\n40\n50.0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n290\n1\n176\n1\n290\n1\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n40\n0.0\n176\n1\n40\n1.0\n176\n1\n90\n0\n176\n1\n62\n18\n420\n0\n176\n1\n90\n50\n176\n1\n90\n3\n176\n1\n62\n5\n420\n255\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n62\n256\n176\n0\n40\n1.0\n176\n0\n90\n2\n176\n1\n1\nstrokes_ogs.tif\n176\n1\n290\n0\n176\n1\n40\n1.0\n176\n1\n40\n1.0\n176\n1\n1001\nACAD\n1000\nAcDbSavedByObjectVersion\n1070\n0\n0\nVISUALSTYLE\n5\nFF\n102\n{ACAD_REACTORS\n330\nEF\n102\n}\n330\nEF\n100\nAcDbVisualStyle\n2\nColorChange\n70\n16\n177\n3\n291\n1\n70\n58\n90\n2\n176\n1\n90\n2\n176\n1\n90\n3\n176\n1\n90\n0\n176\n1\n40\n0.6\n176\n1\n40\n30.0\n176\n1\n62\n8\n420\n8421504\n176\n1\n90\n1\n176\n1\n90\n4\n176\n1\n62\n7\n176\n1\n62\n257\n176\n1\n90\n1\n176\n1\n90\n1\n176\n1\n40\n1.0\n176\n1\n90\n8\n176\n1\n62\n8\n420\n8421504\n176\n1\n40\n1.0\n176\n1\n90\n1\n176\n1\n90\n6\n176\n1\n90\n2\n176\n1\n62\n7\n176\n1\n90\n5\n176\n1\n90\n0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n90\n1\n176\n1\n40\n0.0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n290\n1\n176\n1\n290\n1\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n40\n0.0\n176\n1\n40\n1.0\n176\n1\n90\n0\n176\n1\n62\n18\n420\n0\n176\n1\n90\n50\n176\n1\n90\n3\n176\n1\n62\n5\n420\n255\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n62\n256\n176\n0\n40\n1.0\n176\n0\n90\n2\n176\n1\n1\nstrokes_ogs.tif\n176\n1\n290\n0\n176\n1\n40\n1.0\n176\n1\n40\n1.0\n176\n1\n1001\nACAD\n1000\nAcDbSavedByObjectVersion\n1070\n0\n0\nVISUALSTYLE\n5\nF8\n102\n{ACAD_REACTORS\n330\nEF\n102\n}\n330\nEF\n100\nAcDbVisualStyle\n2\nConceptual\n70\n9\n177\n3\n291\n0\n70\n58\n90\n3\n176\n1\n90\n2\n176\n1\n90\n1\n176\n1\n90\n0\n176\n1\n40\n0.6\n176\n1\n40\n30.0\n176\n1\n62\n7\n420\n16777215\n176\n1\n90\n2\n176\n1\n90\n2\n176\n1\n62\n7\n176\n1\n62\n257\n176\n1\n90\n1\n176\n1\n90\n1\n176\n1\n40\n40.0\n176\n1\n90\n8\n176\n1\n62\n7\n176\n1\n40\n1.0\n176\n1\n90\n1\n176\n1\n90\n6\n176\n1\n90\n2\n176\n1\n62\n7\n176\n1\n90\n3\n176\n1\n90\n0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n90\n1\n176\n1\n40\n0.0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n290\n1\n176\n1\n290\n1\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n40\n0.0\n176\n1\n40\n1.0\n176\n1\n90\n0\n176\n1\n62\n18\n420\n0\n176\n1\n90\n50\n176\n1\n90\n3\n176\n1\n62\n5\n420\n255\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n62\n256\n176\n0\n40\n1.0\n176\n0\n90\n2\n176\n1\n1\nstrokes_ogs.tif\n176\n1\n290\n0\n176\n1\n40\n1.0\n176\n1\n40\n1.0\n176\n1\n1001\nACAD\n1000\nAcDbSavedByObjectVersion\n1070\n0\n0\nVISUALSTYLE\n5\nFA\n102\n{ACAD_REACTORS\n330\nEF\n102\n}\n330\nEF\n100\nAcDbVisualStyle\n2\nDim\n70\n11\n177\n3\n291\n1\n70\n58\n90\n2\n176\n1\n90\n2\n176\n1\n90\n1\n176\n1\n90\n0\n176\n1\n40\n0.6\n176\n1\n40\n30.0\n176\n1\n62\n7\n420\n16777215\n176\n1\n90\n1\n176\n1\n90\n4\n176\n1\n62\n7\n176\n1\n62\n257\n176\n1\n90\n1\n176\n1\n90\n1\n176\n1\n40\n1.0\n176\n1\n90\n8\n176\n1\n62\n7\n176\n1\n40\n1.0\n176\n1\n90\n1\n176\n1\n90\n6\n176\n1\n90\n2\n176\n1\n62\n7\n176\n1\n90\n5\n176\n1\n90\n0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n90\n1\n176\n1\n40\n-50.0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n290\n1\n176\n1\n290\n1\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n40\n0.0\n176\n1\n40\n1.0\n176\n1\n90\n0\n176\n1\n62\n18\n420\n0\n176\n1\n90\n50\n176\n1\n90\n3\n176\n1\n62\n5\n420\n255\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n62\n256\n176\n0\n40\n1.0\n176\n0\n90\n2\n176\n1\n1\nstrokes_ogs.tif\n176\n1\n290\n0\n176\n1\n40\n1.0\n176\n1\n40\n1.0\n176\n1\n1001\nACAD\n1000\nAcDbSavedByObjectVersion\n1070\n0\n0\nVISUALSTYLE\n5\n1E6\n102\n{ACAD_REACTORS\n330\nEF\n102\n}\n330\nEF\n100\nAcDbVisualStyle\n2\nEdgeColorOff\n70\n22\n177\n3\n291\n1\n70\n58\n90\n2\n176\n0\n90\n2\n176\n0\n90\n0\n176\n0\n90\n0\n176\n0\n40\n0.6\n176\n0\n40\n30.0\n176\n0\n62\n7\n420\n16777215\n176\n0\n90\n1\n176\n0\n90\n4\n176\n0\n62\n7\n176\n0\n62\n257\n176\n0\n90\n1\n176\n0\n90\n1\n176\n0\n40\n1.0\n176\n0\n90\n8\n176\n2\n62\n7\n176\n0\n40\n1.0\n176\n0\n90\n1\n176\n0\n90\n6\n176\n0\n90\n2\n176\n0\n62\n7\n176\n0\n90\n5\n176\n0\n90\n0\n176\n0\n90\n0\n176\n0\n290\n0\n176\n0\n90\n1\n176\n0\n40\n0.0\n176\n0\n90\n0\n176\n0\n290\n0\n176\n1\n290\n1\n176\n1\n290\n1\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n40\n0.0\n176\n1\n40\n1.0\n176\n1\n90\n0\n176\n1\n62\n18\n420\n0\n176\n1\n90\n50\n176\n1\n90\n3\n176\n1\n62\n5\n420\n255\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n62\n256\n176\n0\n40\n1.0\n176\n0\n90\n2\n176\n1\n1\nstrokes_ogs.tif\n176\n1\n290\n0\n176\n1\n40\n1.0\n176\n1\n40\n1.0\n176\n1\n1001\nACAD\n1000\nAcDbSavedByObjectVersion\n1070\n0\n0\nVISUALSTYLE\n5\nFE\n102\n{ACAD_REACTORS\n330\nEF\n102\n}\n330\nEF\n100\nAcDbVisualStyle\n2\nFacepattern\n70\n15\n177\n3\n291\n1\n70\n58\n90\n2\n176\n1\n90\n2\n176\n1\n90\n1\n176\n1\n90\n0\n176\n1\n40\n0.6\n176\n1\n40\n30.0\n176\n1\n62\n7\n420\n16777215\n176\n1\n90\n1\n176\n1\n90\n4\n176\n1\n62\n7\n176\n1\n62\n257\n176\n1\n90\n1\n176\n1\n90\n1\n176\n1\n40\n1.0\n176\n1\n90\n8\n176\n1\n62\n7\n176\n1\n40\n1.0\n176\n1\n90\n1\n176\n1\n90\n6\n176\n1\n90\n2\n176\n1\n62\n7\n176\n1\n90\n5\n176\n1\n90\n0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n90\n1\n176\n1\n40\n0.0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n290\n1\n176\n1\n290\n1\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n40\n0.0\n176\n1\n40\n1.0\n176\n1\n90\n0\n176\n1\n62\n18\n420\n0\n176\n1\n90\n50\n176\n1\n90\n3\n176\n1\n62\n5\n420\n255\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n62\n256\n176\n0\n40\n1.0\n176\n0\n90\n2\n176\n1\n1\nstrokes_ogs.tif\n176\n1\n290\n0\n176\n1\n40\n1.0\n176\n1\n40\n1.0\n176\n1\n1001\nACAD\n1000\nAcDbSavedByObjectVersion\n1070\n0\n0\nVISUALSTYLE\n5\nF0\n102\n{ACAD_REACTORS\n330\nEF\n102\n}\n330\nEF\n100\nAcDbVisualStyle\n2\nFlat\n70\n0\n177\n3\n291\n1\n70\n58\n90\n2\n176\n1\n90\n1\n176\n1\n90\n1\n176\n1\n90\n2\n176\n1\n40\n0.6\n176\n1\n40\n30.0\n176\n1\n62\n7\n420\n16777215\n176\n1\n90\n0\n176\n1\n90\n0\n176\n1\n62\n7\n176\n1\n62\n257\n176\n1\n90\n1\n176\n1\n90\n1\n176\n1\n40\n1.0\n176\n1\n90\n8\n176\n1\n62\n7\n176\n1\n40\n1.0\n176\n1\n90\n1\n176\n1\n90\n6\n176\n1\n90\n2\n176\n1\n62\n7\n176\n1\n90\n5\n176\n1\n90\n0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n90\n13\n176\n1\n40\n0.0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n290\n1\n176\n1\n290\n1\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n40\n0.0\n176\n1\n40\n1.0\n176\n1\n90\n0\n176\n1\n62\n18\n420\n0\n176\n1\n90\n50\n176\n1\n90\n3\n176\n1\n62\n5\n420\n255\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n62\n256\n176\n0\n40\n1.0\n176\n0\n90\n2\n176\n1\n1\nstrokes_ogs.tif\n176\n1\n290\n0\n176\n1\n40\n1.0\n176\n1\n40\n1.0\n176\n1\n1001\nACAD\n1000\nAcDbSavedByObjectVersion\n1070\n0\n0\nVISUALSTYLE\n5\nF1\n102\n{ACAD_REACTORS\n330\nEF\n102\n}\n330\nEF\n100\nAcDbVisualStyle\n2\nFlatWithEdges\n70\n1\n177\n3\n291\n1\n70\n58\n90\n2\n176\n1\n90\n1\n176\n1\n90\n1\n176\n1\n90\n2\n176\n1\n40\n0.6\n176\n1\n40\n30.0\n176\n1\n62\n7\n420\n16777215\n176\n1\n90\n1\n176\n1\n90\n0\n176\n1\n62\n7\n176\n1\n62\n257\n176\n1\n90\n1\n176\n1\n90\n1\n176\n1\n40\n1.0\n176\n1\n90\n0\n176\n1\n62\n257\n176\n1\n40\n1.0\n176\n1\n90\n1\n176\n1\n90\n6\n176\n1\n90\n2\n176\n1\n62\n7\n176\n1\n90\n5\n176\n1\n90\n0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n90\n13\n176\n1\n40\n0.0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n290\n1\n176\n1\n290\n1\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n40\n0.0\n176\n1\n40\n1.0\n176\n1\n90\n0\n176\n1\n62\n18\n420\n0\n176\n1\n90\n50\n176\n1\n90\n3\n176\n1\n62\n5\n420\n255\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n62\n256\n176\n0\n40\n1.0\n176\n0\n90\n2\n176\n1\n1\nstrokes_ogs.tif\n176\n1\n290\n0\n176\n1\n40\n1.0\n176\n1\n40\n1.0\n176\n1\n1001\nACAD\n1000\nAcDbSavedByObjectVersion\n1070\n0\n0\nVISUALSTYLE\n5\nF2\n102\n{ACAD_REACTORS\n330\nEF\n102\n}\n330\nEF\n100\nAcDbVisualStyle\n2\nGouraud\n70\n2\n177\n3\n291\n1\n70\n58\n90\n2\n176\n1\n90\n2\n176\n1\n90\n1\n176\n1\n90\n2\n176\n1\n40\n0.6\n176\n1\n40\n30.0\n176\n1\n62\n7\n420\n16777215\n176\n1\n90\n0\n176\n1\n90\n0\n176\n1\n62\n7\n176\n1\n62\n257\n176\n1\n90\n1\n176\n1\n90\n1\n176\n1\n40\n1.0\n176\n1\n90\n0\n176\n1\n62\n7\n176\n1\n40\n1.0\n176\n1\n90\n1\n176\n1\n90\n6\n176\n1\n90\n2\n176\n1\n62\n7\n176\n1\n90\n5\n176\n1\n90\n0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n90\n13\n176\n1\n40\n0.0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n290\n1\n176\n1\n290\n1\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n40\n0.0\n176\n1\n40\n1.0\n176\n1\n90\n0\n176\n1\n62\n18\n420\n0\n176\n1\n90\n50\n176\n1\n90\n3\n176\n1\n62\n5\n420\n255\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n62\n256\n176\n0\n40\n1.0\n176\n0\n90\n2\n176\n1\n1\nstrokes_ogs.tif\n176\n1\n290\n0\n176\n1\n40\n1.0\n176\n1\n40\n1.0\n176\n1\n1001\nACAD\n1000\nAcDbSavedByObjectVersion\n1070\n0\n0\nVISUALSTYLE\n5\nF3\n102\n{ACAD_REACTORS\n330\nEF\n102\n}\n330\nEF\n100\nAcDbVisualStyle\n2\nGouraudWithEdges\n70\n3\n177\n3\n291\n1\n70\n58\n90\n2\n176\n1\n90\n2\n176\n1\n90\n1\n176\n1\n90\n2\n176\n1\n40\n0.6\n176\n1\n40\n30.0\n176\n1\n62\n7\n420\n16777215\n176\n1\n90\n1\n176\n1\n90\n0\n176\n1\n62\n7\n176\n1\n62\n257\n176\n1\n90\n1\n176\n1\n90\n1\n176\n1\n40\n1.0\n176\n1\n90\n0\n176\n1\n62\n257\n176\n1\n40\n1.0\n176\n1\n90\n1\n176\n1\n90\n6\n176\n1\n90\n2\n176\n1\n62\n7\n176\n1\n90\n5\n176\n1\n90\n0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n90\n13\n176\n1\n40\n0.0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n290\n1\n176\n1\n290\n1\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n40\n0.0\n176\n1\n40\n1.0\n176\n1\n90\n0\n176\n1\n62\n18\n420\n0\n176\n1\n90\n50\n176\n1\n90\n3\n176\n1\n62\n5\n420\n255\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n62\n256\n176\n0\n40\n1.0\n176\n0\n90\n2\n176\n1\n1\nstrokes_ogs.tif\n176\n1\n290\n0\n176\n1\n40\n1.0\n176\n1\n40\n1.0\n176\n1\n1001\nACAD\n1000\nAcDbSavedByObjectVersion\n1070\n0\n0\nVISUALSTYLE\n5\nF7\n102\n{ACAD_REACTORS\n330\nEF\n102\n}\n330\nEF\n100\nAcDbVisualStyle\n2\nHidden\n70\n6\n177\n3\n291\n0\n70\n58\n90\n1\n176\n1\n90\n2\n176\n1\n90\n2\n176\n1\n90\n0\n176\n1\n40\n0.6\n176\n1\n40\n30.0\n176\n1\n62\n7\n420\n16777215\n176\n1\n90\n2\n176\n1\n90\n2\n176\n1\n62\n7\n176\n1\n62\n257\n176\n1\n90\n2\n176\n1\n90\n1\n176\n1\n40\n40.0\n176\n1\n90\n0\n176\n1\n62\n257\n176\n1\n40\n1.0\n176\n1\n90\n1\n176\n1\n90\n6\n176\n1\n90\n2\n176\n1\n62\n7\n176\n1\n90\n3\n176\n1\n90\n0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n90\n1\n176\n1\n40\n0.0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n290\n1\n176\n1\n290\n1\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n40\n0.0\n176\n1\n40\n1.0\n176\n1\n90\n0\n176\n1\n62\n18\n420\n0\n176\n1\n90\n50\n176\n1\n90\n3\n176\n1\n62\n5\n420\n255\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n62\n256\n176\n0\n40\n1.0\n176\n0\n90\n2\n176\n1\n1\nstrokes_ogs.tif\n176\n1\n290\n0\n176\n1\n40\n1.0\n176\n1\n40\n1.0\n176\n1\n1001\nACAD\n1000\nAcDbSavedByObjectVersion\n1070\n0\n0\nVISUALSTYLE\n5\n1E4\n102\n{ACAD_REACTORS\n330\nEF\n102\n}\n330\nEF\n100\nAcDbVisualStyle\n2\nJitterOff\n70\n20\n177\n3\n291\n1\n70\n58\n90\n2\n176\n0\n90\n2\n176\n0\n90\n0\n176\n0\n90\n0\n176\n0\n40\n0.6\n176\n0\n40\n30.0\n176\n0\n62\n7\n420\n16777215\n176\n0\n90\n1\n176\n0\n90\n4\n176\n0\n62\n7\n176\n0\n62\n257\n176\n0\n90\n1\n176\n0\n90\n1\n176\n0\n40\n1.0\n176\n0\n90\n10\n176\n2\n62\n7\n176\n0\n40\n1.0\n176\n0\n90\n1\n176\n0\n90\n6\n176\n0\n90\n2\n176\n0\n62\n7\n176\n0\n90\n5\n176\n0\n90\n0\n176\n0\n90\n0\n176\n0\n290\n0\n176\n0\n90\n1\n176\n0\n40\n0.0\n176\n0\n90\n0\n176\n0\n290\n0\n176\n1\n290\n1\n176\n1\n290\n1\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n40\n0.0\n176\n1\n40\n1.0\n176\n1\n90\n0\n176\n1\n62\n18\n420\n0\n176\n1\n90\n50\n176\n1\n90\n3\n176\n1\n62\n5\n420\n255\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n62\n256\n176\n0\n40\n1.0\n176\n0\n90\n2\n176\n1\n1\nstrokes_ogs.tif\n176\n1\n290\n0\n176\n1\n40\n1.0\n176\n1\n40\n1.0\n176\n1\n1001\nACAD\n1000\nAcDbSavedByObjectVersion\n1070\n0\n0\nVISUALSTYLE\n5\nFD\n102\n{ACAD_REACTORS\n330\nEF\n102\n}\n330\nEF\n100\nAcDbVisualStyle\n2\nLinepattern\n70\n14\n177\n3\n291\n1\n70\n58\n90\n2\n176\n1\n90\n2\n176\n1\n90\n1\n176\n1\n90\n0\n176\n1\n40\n0.6\n176\n1\n40\n30.0\n176\n1\n62\n7\n420\n16777215\n176\n1\n90\n1\n176\n1\n90\n4\n176\n1\n62\n7\n176\n1\n62\n257\n176\n1\n90\n7\n176\n1\n90\n7\n176\n1\n40\n1.0\n176\n1\n90\n8\n176\n1\n62\n7\n176\n1\n40\n1.0\n176\n1\n90\n1\n176\n1\n90\n6\n176\n1\n90\n2\n176\n1\n62\n7\n176\n1\n90\n5\n176\n1\n90\n0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n90\n1\n176\n1\n40\n0.0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n290\n1\n176\n1\n290\n1\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n40\n0.0\n176\n1\n40\n1.0\n176\n1\n90\n0\n176\n1\n62\n18\n420\n0\n176\n1\n90\n50\n176\n1\n90\n3\n176\n1\n62\n5\n420\n255\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n62\n256\n176\n0\n40\n1.0\n176\n0\n90\n2\n176\n1\n1\nstrokes_ogs.tif\n176\n1\n290\n0\n176\n1\n40\n1.0\n176\n1\n40\n1.0\n176\n1\n1001\nACAD\n1000\nAcDbSavedByObjectVersion\n1070\n0\n0\nVISUALSTYLE\n5\n1E5\n102\n{ACAD_REACTORS\n330\nEF\n102\n}\n330\nEF\n100\nAcDbVisualStyle\n2\nOverhangOff\n70\n21\n177\n3\n291\n1\n70\n58\n90\n2\n176\n0\n90\n2\n176\n0\n90\n0\n176\n0\n90\n0\n176\n0\n40\n0.6\n176\n0\n40\n30.0\n176\n0\n62\n7\n420\n16777215\n176\n0\n90\n1\n176\n0\n90\n4\n176\n0\n62\n7\n176\n0\n62\n257\n176\n0\n90\n1\n176\n0\n90\n1\n176\n0\n40\n1.0\n176\n0\n90\n9\n176\n2\n62\n7\n176\n0\n40\n1.0\n176\n0\n90\n1\n176\n0\n90\n6\n176\n0\n90\n2\n176\n0\n62\n7\n176\n0\n90\n5\n176\n0\n90\n0\n176\n0\n90\n0\n176\n0\n290\n0\n176\n0\n90\n1\n176\n0\n40\n0.0\n176\n0\n90\n0\n176\n0\n290\n0\n176\n1\n290\n1\n176\n1\n290\n1\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n40\n0.0\n176\n1\n40\n1.0\n176\n1\n90\n0\n176\n1\n62\n18\n420\n0\n176\n1\n90\n50\n176\n1\n90\n3\n176\n1\n62\n5\n420\n255\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n62\n256\n176\n0\n40\n1.0\n176\n0\n90\n2\n176\n1\n1\nstrokes_ogs.tif\n176\n1\n290\n0\n176\n1\n40\n1.0\n176\n1\n40\n1.0\n176\n1\n1001\nACAD\n1000\nAcDbSavedByObjectVersion\n1070\n0\n0\nVISUALSTYLE\n5\nF9\n102\n{ACAD_REACTORS\n330\nEF\n102\n}\n330\nEF\n100\nAcDbVisualStyle\n2\nRealistic\n70\n8\n177\n3\n291\n0\n70\n58\n90\n2\n176\n1\n90\n3\n176\n1\n90\n0\n176\n1\n90\n2\n176\n1\n40\n0.6\n176\n1\n40\n30.0\n176\n1\n62\n7\n420\n16777215\n176\n1\n90\n0\n176\n1\n90\n0\n176\n1\n62\n7\n176\n1\n62\n257\n176\n1\n90\n1\n176\n1\n90\n1\n176\n1\n40\n1.0\n176\n1\n90\n8\n176\n1\n62\n257\n176\n1\n40\n1.0\n176\n1\n90\n1\n176\n1\n90\n6\n176\n1\n90\n2\n176\n1\n62\n7\n176\n1\n90\n3\n176\n1\n90\n0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n90\n13\n176\n1\n40\n0.0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n290\n1\n176\n1\n290\n1\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n40\n0.0\n176\n1\n40\n1.0\n176\n1\n90\n0\n176\n1\n62\n18\n420\n0\n176\n1\n90\n50\n176\n1\n90\n3\n176\n1\n62\n5\n420\n255\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n62\n256\n176\n0\n40\n1.0\n176\n0\n90\n2\n176\n1\n1\nstrokes_ogs.tif\n176\n1\n290\n0\n176\n1\n40\n1.0\n176\n1\n40\n1.0\n176\n1\n1001\nACAD\n1000\nAcDbSavedByObjectVersion\n1070\n0\n0\nVISUALSTYLE\n5\n1F3\n102\n{ACAD_REACTORS\n330\nEF\n102\n}\n330\nEF\n100\nAcDbVisualStyle\n2\nShaded\n70\n27\n177\n3\n291\n0\n70\n58\n90\n2\n176\n1\n90\n2\n176\n1\n90\n1\n176\n1\n90\n2\n176\n1\n40\n0.6\n176\n1\n40\n30.0\n176\n1\n62\n7\n420\n16777215\n176\n1\n90\n0\n176\n1\n90\n4\n176\n1\n62\n7\n176\n1\n62\n257\n176\n1\n90\n1\n176\n1\n90\n1\n176\n1\n40\n1.0\n176\n1\n90\n8\n176\n1\n62\n257\n176\n1\n40\n1.0\n176\n1\n90\n1\n176\n1\n90\n6\n176\n1\n90\n2\n176\n1\n62\n8\n420\n7895160\n176\n1\n90\n3\n176\n1\n90\n0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n90\n5\n176\n1\n40\n0.0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n290\n1\n176\n1\n290\n1\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n40\n0.0\n176\n1\n40\n1.0\n176\n1\n90\n0\n176\n1\n62\n18\n420\n0\n176\n1\n90\n50\n176\n1\n90\n3\n176\n1\n62\n5\n420\n255\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n62\n256\n176\n0\n40\n1.0\n176\n0\n90\n2\n176\n1\n1\nstrokes_ogs.tif\n176\n1\n290\n0\n176\n1\n40\n1.0\n176\n1\n40\n1.0\n176\n1\n1001\nACAD\n1000\nAcDbSavedByObjectVersion\n1070\n0\n0\nVISUALSTYLE\n5\n1F2\n102\n{ACAD_REACTORS\n330\nEF\n102\n}\n330\nEF\n100\nAcDbVisualStyle\n2\nShadedwithedges\n70\n26\n177\n3\n291\n0\n70\n58\n90\n2\n176\n1\n90\n2\n176\n1\n90\n1\n176\n1\n90\n2\n176\n1\n40\n0.6\n176\n1\n40\n30.0\n176\n1\n62\n7\n420\n16777215\n176\n1\n90\n1\n176\n1\n90\n2\n176\n1\n62\n7\n176\n1\n62\n257\n176\n1\n90\n2\n176\n1\n90\n1\n176\n1\n40\n1.0\n176\n1\n90\n8\n176\n1\n62\n257\n176\n1\n40\n1.0\n176\n1\n90\n1\n176\n1\n90\n6\n176\n1\n90\n2\n176\n1\n62\n7\n176\n1\n90\n3\n176\n1\n90\n0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n90\n5\n176\n1\n40\n0.0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n290\n1\n176\n1\n290\n1\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n40\n0.0\n176\n1\n40\n1.0\n176\n1\n90\n0\n176\n1\n62\n18\n420\n0\n176\n1\n90\n50\n176\n1\n90\n3\n176\n1\n62\n5\n420\n255\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n62\n256\n176\n0\n40\n1.0\n176\n0\n90\n2\n176\n1\n1\nstrokes_ogs.tif\n176\n1\n290\n0\n176\n1\n40\n1.0\n176\n1\n40\n1.0\n176\n1\n1001\nACAD\n1000\nAcDbSavedByObjectVersion\n1070\n0\n0\nVISUALSTYLE\n5\n1EF\n102\n{ACAD_REACTORS\n330\nEF\n102\n}\n330\nEF\n100\nAcDbVisualStyle\n2\nShadesofGray\n70\n23\n177\n3\n291\n0\n70\n58\n90\n2\n176\n1\n90\n2\n176\n1\n90\n3\n176\n1\n90\n0\n176\n1\n40\n0.6\n176\n1\n40\n30.0\n176\n1\n62\n7\n420\n16777215\n176\n1\n90\n2\n176\n1\n90\n2\n176\n1\n62\n7\n176\n1\n62\n7\n176\n1\n90\n1\n176\n1\n90\n1\n176\n1\n40\n40.0\n176\n1\n90\n8\n176\n1\n62\n7\n176\n1\n40\n1.0\n176\n1\n90\n1\n176\n1\n90\n6\n176\n1\n90\n2\n176\n1\n62\n7\n176\n1\n90\n3\n176\n1\n90\n0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n90\n1\n176\n1\n40\n0.0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n290\n1\n176\n1\n290\n1\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n40\n0.0\n176\n1\n40\n1.0\n176\n1\n90\n0\n176\n1\n62\n18\n420\n0\n176\n1\n90\n50\n176\n1\n90\n3\n176\n1\n62\n5\n420\n255\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n62\n256\n176\n0\n40\n1.0\n176\n0\n90\n2\n176\n1\n1\nstrokes_ogs.tif\n176\n1\n290\n0\n176\n1\n40\n1.0\n176\n1\n40\n1.0\n176\n1\n1001\nACAD\n1000\nAcDbSavedByObjectVersion\n1070\n0\n0\nVISUALSTYLE\n5\n1F0\n102\n{ACAD_REACTORS\n330\nEF\n102\n}\n330\nEF\n100\nAcDbVisualStyle\n2\nSketchy\n70\n24\n177\n3\n291\n0\n70\n58\n90\n1\n176\n1\n90\n2\n176\n1\n90\n2\n176\n1\n90\n0\n176\n1\n40\n0.6\n176\n1\n40\n30.0\n176\n1\n62\n7\n420\n16777215\n176\n1\n90\n2\n176\n1\n90\n2\n176\n1\n62\n7\n176\n1\n62\n7\n176\n1\n90\n1\n176\n1\n90\n1\n176\n1\n40\n40.0\n176\n1\n90\n11\n176\n1\n62\n7\n176\n1\n40\n1.0\n176\n1\n90\n1\n176\n1\n90\n6\n176\n1\n90\n2\n176\n1\n62\n7\n176\n1\n90\n6\n176\n1\n90\n0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n90\n1\n176\n1\n40\n0.0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n290\n1\n176\n1\n290\n1\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n40\n0.0\n176\n1\n40\n1.0\n176\n1\n90\n0\n176\n1\n62\n18\n420\n0\n176\n1\n90\n50\n176\n1\n90\n3\n176\n1\n62\n5\n420\n255\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n62\n256\n176\n0\n40\n1.0\n176\n0\n90\n2\n176\n1\n1\nstrokes_ogs.tif\n176\n1\n290\n0\n176\n1\n40\n1.0\n176\n1\n40\n1.0\n176\n1\n1001\nACAD\n1000\nAcDbSavedByObjectVersion\n1070\n0\n0\nVISUALSTYLE\n5\nFC\n102\n{ACAD_REACTORS\n330\nEF\n102\n}\n330\nEF\n100\nAcDbVisualStyle\n2\nThicken\n70\n13\n177\n3\n291\n1\n70\n58\n90\n2\n176\n1\n90\n2\n176\n1\n90\n1\n176\n1\n90\n0\n176\n1\n40\n0.6\n176\n1\n40\n30.0\n176\n1\n62\n7\n420\n16777215\n176\n1\n90\n1\n176\n1\n90\n4\n176\n1\n62\n7\n176\n1\n62\n257\n176\n1\n90\n1\n176\n1\n90\n1\n176\n1\n40\n1.0\n176\n1\n90\n12\n176\n1\n62\n7\n176\n1\n40\n1.0\n176\n1\n90\n1\n176\n1\n90\n6\n176\n1\n90\n2\n176\n1\n62\n7\n176\n1\n90\n5\n176\n1\n90\n0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n90\n1\n176\n1\n40\n0.0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n290\n1\n176\n1\n290\n1\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n40\n0.0\n176\n1\n40\n1.0\n176\n1\n90\n0\n176\n1\n62\n18\n420\n0\n176\n1\n90\n50\n176\n1\n90\n3\n176\n1\n62\n5\n420\n255\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n62\n256\n176\n0\n40\n1.0\n176\n0\n90\n2\n176\n1\n1\nstrokes_ogs.tif\n176\n1\n290\n0\n176\n1\n40\n1.0\n176\n1\n40\n1.0\n176\n1\n1001\nACAD\n1000\nAcDbSavedByObjectVersion\n1070\n0\n0\nVISUALSTYLE\n5\nF6\n102\n{ACAD_REACTORS\n330\nEF\n102\n}\n330\nEF\n100\nAcDbVisualStyle\n2\nWireframe\n70\n5\n177\n3\n291\n0\n70\n58\n90\n0\n176\n1\n90\n2\n176\n1\n90\n0\n176\n1\n90\n0\n176\n1\n40\n0.6\n176\n1\n40\n30.0\n176\n1\n62\n7\n420\n16777215\n176\n1\n90\n1\n176\n1\n90\n4\n176\n1\n62\n7\n176\n1\n62\n257\n176\n1\n90\n1\n176\n1\n90\n1\n176\n1\n40\n1.0\n176\n1\n90\n0\n176\n1\n62\n257\n176\n1\n40\n1.0\n176\n1\n90\n1\n176\n1\n90\n6\n176\n1\n90\n2\n176\n1\n62\n7\n176\n1\n90\n3\n176\n1\n90\n0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n90\n1\n176\n1\n40\n0.0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n290\n1\n176\n1\n290\n1\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n40\n0.0\n176\n1\n40\n1.0\n176\n1\n90\n0\n176\n1\n62\n18\n420\n0\n176\n1\n90\n50\n176\n1\n90\n3\n176\n1\n62\n5\n420\n255\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n62\n256\n176\n0\n40\n1.0\n176\n0\n90\n2\n176\n1\n1\nstrokes_ogs.tif\n176\n1\n290\n0\n176\n1\n40\n1.0\n176\n1\n40\n1.0\n176\n1\n1001\nACAD\n1000\nAcDbSavedByObjectVersion\n1070\n0\n0\nVISUALSTYLE\n5\n1F1\n102\n{ACAD_REACTORS\n330\nEF\n102\n}\n330\nEF\n100\nAcDbVisualStyle\n2\nX-Ray\n70\n25\n177\n3\n291\n0\n70\n58\n90\n2\n176\n1\n90\n2\n176\n1\n90\n1\n176\n1\n90\n1\n176\n1\n40\n0.5\n176\n1\n40\n30.0\n176\n1\n62\n7\n420\n16777215\n176\n1\n90\n1\n176\n1\n90\n0\n176\n1\n62\n7\n176\n1\n62\n257\n176\n1\n90\n1\n176\n1\n90\n1\n176\n1\n40\n1.0\n176\n1\n90\n8\n176\n1\n62\n7\n176\n1\n40\n1.0\n176\n1\n90\n1\n176\n1\n90\n6\n176\n1\n90\n2\n176\n1\n62\n7\n176\n1\n90\n3\n176\n1\n90\n0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n90\n13\n176\n1\n40\n0.0\n176\n1\n90\n0\n176\n1\n290\n0\n176\n1\n290\n1\n176\n1\n290\n1\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n40\n0.0\n176\n1\n40\n1.0\n176\n1\n90\n0\n176\n1\n62\n18\n420\n0\n176\n1\n90\n50\n176\n1\n90\n3\n176\n1\n62\n5\n420\n255\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n90\n50\n176\n1\n290\n0\n176\n1\n90\n50\n176\n1\n62\n256\n176\n0\n40\n1.0\n176\n0\n90\n2\n176\n1\n1\nstrokes_ogs.tif\n176\n1\n290\n0\n176\n1\n40\n1.0\n176\n1\n40\n1.0\n176\n1\n1001\nACAD\n1000\nAcDbSavedByObjectVersion\n1070\n0\n0\nDICTIONARYVAR\n5\n146\n102\n{ACAD_REACTORS\n330\n5E\n102\n}\n330\n5E\n100\nDictionaryVariables\n280\n0\n1\n1:1\n0\nDICTIONARYVAR\n5\n259\n102\n{ACAD_REACTORS\n330\n5E\n102\n}\n330\n5E\n100\nDictionaryVariables\n280\n0\n1\n3.500000\n0\nDICTIONARYVAR\n5\n25A\n102\n{ACAD_REACTORS\n330\n5E\n102\n}\n330\n5E\n100\nDictionaryVariables\n280\n0\n1\nacadiso.lin\n0\nDICTIONARYVAR\n5\n145\n102\n{ACAD_REACTORS\n330\n5E\n102\n}\n330\n5E\n100\nDictionaryVariables\n280\n0\n1\nSTANDARD\n0\nDICTIONARYVAR\n5\n84\n102\n{ACAD_REACTORS\n330\n5E\n102\n}\n330\n5E\n100\nDictionaryVariables\n280\n0\n1\nSTANDARD\n0\nDICTIONARYVAR\n5\n227\n102\n{ACAD_REACTORS\n330\n5E\n102\n}\n330\n5E\n100\nDictionaryVariables\n280\n0\n1\nMetric50\n0\nDICTIONARYVAR\n5\n228\n102\n{ACAD_REACTORS\n330\n5E\n102\n}\n330\n5E\n100\nDictionaryVariables\n280\n0\n1\nMetric50\n0\nDICTIONARYVAR\n5\n5F\n102\n{ACAD_REACTORS\n330\n5E\n102\n}\n330\n5E\n100\nDictionaryVariables\n280\n0\n1\n2\n0\nDICTIONARYVAR\n5\n63\n102\n{ACAD_REACTORS\n330\n5E\n102\n}\n330\n5E\n100\nDictionaryVariables\n280\n0\n1\n1\n0\nDICTIONARYVAR\n5\n1AE\n102\n{ACAD_REACTORS\n330\n5E\n102\n}\n330\n5E\n100\nDictionaryVariables\n280\n0\n1\n0\n0\nDICTIONARYVAR\n5\n1AF\n102\n{ACAD_REACTORS\n330\n5E\n102\n}\n330\n5E\n100\nDictionaryVariables\n280\n0\n1\n0\n0\nDICTIONARY\n5\n292\n102\n{ACAD_REACTORS\n330\n290\n102\n}\n330\n290\n100\nAcDbDictionary\n281\n1\n0\nDICTIONARY\n5\n291\n102\n{ACAD_REACTORS\n330\n290\n102\n}\n330\n290\n100\nAcDbDictionary\n281\n1\n3\n1818707299632\n350\n28B\n3\n1818707299648\n350\n28C\n3\n1818707299664\n350\n28D\n3\n1818707299680\n350\n28E\n3\n1818707299696\n350\n28F\n0\nDICTIONARY\n5\n295\n330\n21C\n100\nAcDbDictionary\n280\n1\n281\n1\n3\nACAD_XREC_ROUNDTRIP\n360\n296\n0\nDICTIONARY\n5\n205\n330\n22\n100\nAcDbDictionary\n280\n1\n281\n1\n0\nDICTIONARY\n5\n1F9\n330\nED\n100\nAcDbDictionary\n280\n1\n281\n1\n3\nFBXASSET\n360\n1FA\n0\nDICTIONARY\n5\n1F7\n330\nEC\n100\nAcDbDictionary\n280\n1\n281\n1\n3\nFBXASSET\n360\n1F8\n0\nDICTIONARY\n5\n173\n330\nEE\n100\nAcDbDictionary\n280\n1\n281\n1\n3\nBUMPTILE\n360\n175\n3\nDIFFUSETILE\n360\n174\n3\nFBXASSET\n360\n1FB\n3\nOPACITYTILE\n360\n176\n3\nREFLECTIONTILE\n360\n177\n0\nDICTIONARY\n5\n293\n330\n21A\n100\nAcDbDictionary\n280\n1\n281\n1\n3\nACAD_XREC_ROUNDTRIP\n360\n294\n0\nDICTIONARY\n5\n162\n330\n7F\n100\nAcDbDictionary\n280\n1\n281\n1\n3\nACAD_ROUNDTRIP_2008_TABLESTYLE_CELLSTYLEMAP\n360\n289\n0\nXRECORD\n5\n28B\n102\n{ACAD_REACTORS\n330\n291\n102\n}\n330\n291\n100\nAcDbXrecord\n280\n1\n1\nAcDb_Thumbnail_Schema\n102\n{ATTRRECORD\n341\n28C\n2\nAcDbDs::TreatedAsObjectData\n280\n1\n291\n1\n102\nATTRRECORD}\n102\n{ATTRRECORD\n341\n28D\n2\nAcDbDs::Legacy\n280\n1\n291\n1\n102\nATTRRECORD}\n2\nAcDbDs::ID\n280\n10\n91\n8\n102\n{ATTRRECORD\n341\n28E\n2\nAcDs:Indexable\n280\n1\n291\n1\n102\nATTRRECORD}\n102\n{ATTRRECORD\n341\n28F\n2\nAcDbDs::HandleAttribute\n280\n7\n282\n1\n102\nATTRRECORD}\n2\nThumbnail_Data\n280\n15\n91\n0\n0\nXRECORD\n5\n28C\n102\n{ACAD_REACTORS\n330\n291\n102\n}\n330\n291\n100\nAcDbXrecord\n280\n1\n1\nAcDbDs::TreatedAsObjectDataSchema\n2\nAcDbDs::TreatedAsObjectData\n280\n1\n91\n0\n0\nXRECORD\n5\n28D\n102\n{ACAD_REACTORS\n330\n291\n102\n}\n330\n291\n100\nAcDbXrecord\n280\n1\n1\nAcDbDs::LegacySchema\n2\nAcDbDs::Legacy\n280\n1\n91\n0\n0\nXRECORD\n5\n28E\n102\n{ACAD_REACTORS\n330\n291\n102\n}\n330\n291\n100\nAcDbXrecord\n280\n1\n1\nAcDbDs::IndexedPropertySchema\n2\nAcDs:Indexable\n280\n1\n91\n0\n0\nXRECORD\n5\n28F\n102\n{ACAD_REACTORS\n330\n291\n102\n}\n330\n291\n100\nAcDbXrecord\n280\n1\n1\nAcDbDs::HandleAttributeSchema\n2\nAcDbDs::HandleAttribute\n280\n7\n91\n1\n284\n1\n0\nXRECORD\n5\n296\n102\n{ACAD_REACTORS\n330\n295\n102\n}\n330\n295\n100\nAcDbXrecord\n280\n1\n102\nDISPLAYNAME\n1\nMetric50\n102\nFLAGS\n90\n0\n0\nXRECORD\n5\n1FA\n102\n{ACAD_REACTORS\n330\n1F9\n102\n}\n330\n1F9\n100\nAcDbXrecord\n280\n1\n70\n1\n90\n429727718\n1\nD62C5603-E3A1-4AEA-B7FB-FE5D8D0755AF\n310\n504B03040A0000080000CC70623B3DEE336E79000000790000001B0000006175746F6465736B2D64657369676E2D7061636B6167652E786D6C3C3F786D6C2076657273696F6E3D22312E302220656E636F64696E673D227574662D3822203F3E3C666F726D6174733E3C666F726D61743E687474703A2F2F736368656D612E\n310\n6175746F6465736B2E636F6D2F64657369676E2D7061636B6167652F323030393C2F666F726D61743E3C2F666F726D6174733E504B0304140006080800CC70623BD486FD9CA0000000F4000000130000005B436F6E74656E745F54797065735D2E786D6C7D8EC10E82300C865F65E91D8A1E8C310C0EEA1BF002731658846E\n310\nD98AC1B77784ABF1D8FE5FBFBF75BBCE937A534CCEB38643598122B6FEE978D0B0485F9C41B54DDD7D022595594E1A469170414C76A4D9A4D207E29CF43ECE46F218070CC6BECC4078ACAA135ACF422C856C0E68EA1BF5669944DDD7BCDE7B1F8E415D77AECB980613C2E4AC91FC167A2B244592486606FC29C8FD7F045B9A\n310\nEF7053A7E60B504B0304140006080800CC70623B853B8169EB0000007C01000008000000636F72652E786D6C8D90416EC3201045AF62CDB6C206821CC7C244919D9CA01740401C94182C03558F5F9C3852BBEB6A467FFE9B197D7EFC9E1EC5975982F5AE035262288C535E5B377690E21535501C055FBC8FBF6C503839990E\n310\n5619041F179FE64D52DE45E362569DD7661365082642A11EB9E920A89B99642953CC8E702F67A9EE7234257977194EC9EAE275C4EABCCF5EAD5940D4AC6F0E35A568B8F43562CD7046CD199FD07E60174276A7BE677B5EADB0E0D14EEFFB6A31321A0D82627C4084204C3F096B71DD52F6819B16635EADF63F509AF53FA164\n310\n5DDCD1EDDD17164090FCC8732078B56691CB33A85CD7DCC40F504B0304140006080800CC70623B55019EA25F0000007C00000007000000636E782E786D6C4DCB3B0E80201045D1AD90E915ED2CF8AC45050C11660C8261F98AB1B07AC9C97D42D718D865D3E909258CFD00CCE24AC6E326A164D74DC0B4128928FF32603847\n310\n2BA13128B1252AC747C6BAB984FC68F0B87FE8960A5C09FE86CFB69FBA01504B0304140006080800CC70623BDBABAAF470010000D40300000C0000006662782F636F72652E786D6CC553D16E823014FD95A6AF4B694182CC941A83FA05FB810A9511A125A5257EFE2E82712ECEB8A7F100CD39F7F69E734AF9FADC366850B6\n310\nAF8DCE7018308C942E4C59EB2AC3DE1D498AD15A706B8CFB56869196ADCAF00863C12B6B7C374385D14E6907A836A59A41D9F7CA615434B0C8705F7CAA5606D23BA8E84F41278B93AC54100640439DE0BDB320004D43C63716C7C399D30917DCFBBA9CD9BA8469F5B156168B24CED3F7248AC8769F27244EB73B92EED8862C\n310\nB7F13E0C179B3C8F979C8ECD82BBBABDAA2BAC924E9558448CBD9330242CFA08E3154B5651FCC6D215639C8EE5774DBE2B5F6CF2B5768B68963BB5F5588420E442FC700B1139D4CB01F450C1E918227C2E09DF070D8140C84E1E9AAB8F1340832A9CB13130A5F1376A908D57309505ECF2A0DF179C4E9D30F5B239B87E3823\n310\n7A79C6F31DE1A8A5AEC08474B03C7837EAE4938639B44E5932B833D2C6B6B279CDC613877FA26EE21F4A2A4C63EC7F29A2F301D1F9F7A0E37D145F504B0304140006080800CC70623B9C113CC27E0000009D0000000B0000006662782F636E782E786D6C4DCCDF0A83201C86E15B91DFB94BFB330DD428C8FB886521330DA7\n310\n6397BF1A1DECE883878F57749FCDA1B7892F1BBC047A23808C7F84D9FA55424E0BE6803A256208E9EF06C84F9B91703228B1C690F78B66B34CD9A5439DF5CF0BFBF65E35BCA1B8D6A5C6F540381E886698B5741C695F9503EBA150A2F8958E3DC3EA0B504B0304140006080800CC70623B7DF2F77C2A010000120200003100\n310\n00006662782F41393633353835312D344632462D344230382D423046372D3739314545314133324237412F636F72652E786D6C8D51DB8EC22014FC15C2939B0D2DB4B45643319AE817EC0F6041255A68B86CFCFC856D4D76DF7CE190393373060EDB3DC707F856CE6B6B7A480A0C81328395DA5C7B18C3057510EC3873D686\n310\n3F34088C18550F330C39BB3A1BA7051AAC09CA84841A2BD5020AEF55806078A44B0FFD7053A328440C89E1EFC52486BBB8AA8214A99D789CF9E05200300FC927E4FB4D5B375D43103D5527440FB843077C5AA3F5861C8F645F5787F59E95B390B318B55CE45AA638FAA2957BD7248B390B7A7CC51F9C124149C82B8C378810\n310\n84AB2F42B7B8DD56F413775B8C5999E9FF4471926F8AA236A1AE96B8B3CC434E5839373893369E1FAF30EA395917409EB7F26AF8801C171837A4A6AC9C89E9F9C9B1A58BA30FD6A5EF5DDDCF894B9AD9B6A59C957943A9FCAE2FD5BC4DFE03504B0304140006080800CC70623BAD7543B64E01000033030000300000006662\n310\n782F41393633353835312D344632462D344230382D423046372D3739314545314133324237412F636E782E786D6CD593CD6EC32010845F0571AD6CE3D48AD20813A9873E410FBD12D82434182C7EAAE6EDBB2424CD25871E7B41D6EC30B3FA84F9E67BB2E40B4234DE8DB46F1925E094D7C6ED479AD3AE5951B2113C789FEE\n310\n6C943839C1488B4C05DF079FE72A69D8C96C13AAD6B8631503449F83828872B949AC57D26200B826A308D316B4064D6E46FCDA41C05550DC9E483A00797BFD207EFB092A45DE9514C1BBD22178396BD39D891265658C238DEA00936C654E5E433CB65A26D9F6EDB5EBC14EBF49A45CB856E66048291F6939A9A81BB5C89177\n310\n38143CA680F4AA299D66A042CEB3354A2684DC9D8D178FE0D9B8B41CAAD720F880EE7EF93C0C18769E099ECC04D5A102C8049A8A05632F4DDF376CF1DE0F6BB65C2F8627B65A33C6BB62177CEBBDAD973006829F89F22E814B54F4BC2BE347F8AA8F681390B50FA73F804400B5F542E796F19FF974E7F78DB802FE05E20750\n310\n4B0304140006080800CC70623BE75B7789680500003C100000340000006662782F41393633353835312D344632462D344230382D423046372D3739314545314133324237412F6F626A656374732E786D6CAD575B8F9B3818FD2B887D06C22499CB8AA1CA655245D5B455A356FB305264C061D8018C6C3393D95FBFC7600890\n310\nA4CD5EF210B0B1BFEBF98E3F7B1FF6596ABC522E1296DF9BAE3D320D9A872C4AF2F8DE2CE5CEBA358D0FBEC719939D65A691938CDE9B6ADAF4BD98B3B2D05311DD91329583D9D5FC0F438434A7A611A644887B5384CF34233629258BA878B12322891DEFF6B66BD70BFB62634E8AE781D082709A4B588AF91C528CDA28B73F\n310\n1C998EEF39EABBEFA97FBD6A7C7E9553F9D3D79FE442923C3C523610337627CB87ABE99D359D4CC6D6E4FACAB5E6ABF9D2726FC6A3C5F56271377BB88362213924694B38DD99FE47C48627A1E7D49F5A8BB5E1A74C0A599ED3B0F21F1E56366B89112D681E218F0915D0D6F17AD41FBA2A369DCF6335D62ABBD39779D5DDD1\n310\n11D4D8DE3CBB96B2E04FB8202E41051754A1AA8E8F76B4C6DFE810B580B1547F4B84911149794252234D024EF8BBE963A95AE27B3D310A9D5C215C7960FAEE415ED75694C6AFB17BCACA5D99A60A9AA65F217B0BFC53292ACB92BF283FAD0D3621576592CB5BED907C2FA8E9DF794E35E97BEA31BED21FEB401ABB94C44839\n310\nDCACBF0E1C5DA8DA5B2F4DFFD32AD86F543D9E565E7056502E157C00AD2671CD534549AB752FCA9CDA00677A313F04E51B22FF19E57B300579E3C97EB29F682D92935CEC18CF901B7B54FD8C51F362B56FC72FE0B3C1EAE335EDCCBF5AEC39ADB17DC238973F804BA5E6F6BFE7AF1FB32E523BE9F3BD571418E3631DCA4D48\n310\n5250CF639223210A9446CA30052EDF057BD35F8329C1ECD84552BF0DC8D18BE7BCE23BFE6BD960AB4A7DE79923A103BEBD80F911CBAA2C60DB19B01CF164A5583B772EE6D3FFA56666CBCDA74DC97724A48F9A58967497E489C4D979006FD7A05E227A1EBDD0F737C623387A9C844D3709995625106D157315F8B8392CD4E0\n310\nA0B9A720C4BE9829CEF37EA1E13111214D53925356365ADA634861B52519DD27A00AEB808EAF0628E6F435519D446F45CF2C9CF5214F0A15B2F6D06B79DA3EE3CBF7F56780D2F4E7EF73A0F5E5B02A38D07DC852C6B7C1FBB6664213E0C39E3EBA7FF4E1AD23EA2829407C85E586727488B751B2DB9502BC7B228A3FD68B6E\n310\nA65A22397E690AA8D158D7E404EC8CDA235CC3B7D1898680131CEC2CDF2638C65196279577750F15884AEE19F94199155B92B13297978469D4F8D358DF0AEF7631E28DC8F0D9F437D5D39A83B2231A1D52D543813A824EF8D44BCFF2FA6A31BD1E8DAD87F1CCB526B3879935BF59CDADD5C37479BB1CDD4CA7B3556B516589\n310\nEF352754B706114D9C885EC9131DE6EFEB43D99AFE2391C2F958179413D7CFEF6B1B6DB1E7600F00DE6E5C67454A339A4BA2E0FBA85ED26F045D454F463DBFCE484C2F90F2E5E3666003662ED8F755951A7D1BECD5B30B550B2785C8E7320B7292A4838DDA71BBC863ED7613CAF659337A3354231D4FF4A182A54904C2898C\n310\n98B28C4AD0CE056CCF332A80986E571EE9DBC305BB5FEB7E509220A58D25CF042D712A806AC0AD0C657FDEF80D2D9CEAA2EE4D1C76F60BFE74219A06527D6F82DF6412526107381E55E353090704D085B52408A8913C4ED159D79BDA71BB4BC506F4831350EB6F975CD22D69BF7AC49B91A2C0A9DDA3D5CA36AD20FC478E37\n310\nE61844E2352865EBCB61A275A65283CAAA9DD27703B4102F5AF51EF5F573B75CBB5AD38BC845F7A49F82A0966A49C2E3EA5EA0ECD326CD965F1DB402C6FA8B51A4658C5C5E2EC9E214602E55810345408596591009A82E7E7FFACA19EEA299B14A0081A705CB3296EBC14CDF658DCD336EA6D1136881AAEB87B81AB9EE53D5\n310\nF5EB8BC8362082DA24122F98680A4E7930C01A0079749CEA14382A0783E5EBA5A10F8C098456A03D6A4AEB6BB881E2513747552A5DB22C7EDAF83BD5528081A365F7FF06504B0304140006080000CC70623B000000000000000000000000350000006662782F41393633353835312D344632462D344230382D423046372D37\n310\n39314545314133324237412F76657274696365732E62696E504B0304140006080800CC70623BF270F1330600000004000000360000006662782F41393633353835312D344632462D344230382D423046372D3739314545314133324237412F747269616E676C65732E62696E636660600000504B0304140006080000CC7062\n310\n3B000000000000000000000000370000006662782F41393633353835312D344632462D344230382D423046372D3739314545314133324237412F617474726962757465732E62696E504B0304140006080800CC70623B08DA0BD19000000041010000360000006662782F41393633353835312D344632462D344230382D4230\n310\n46372D3739314545314133324237412F6469726563746F72792E786D6C858F410AC3201045AF22B36F53E9A60B35CBEEBAE80D244E44489C6234F4F835464A48035D0DF398FF9F8AF63D0E6CC63039F212F8F9020C7D47C6792B21C5FE7403D62A1188E2E60C98D7234A5830286103A55745067B9D86B8A3CF9C7F90C11DE6\n310\n07FB144396D7B6A82D282E9A152AD114D5EF2CB866EEE831B8EEA07A7BB5A8D7D61A2BAAEB7FD5F70921FF497D00504B0304140006080800CC70623BEDD1DC58FD000000A00100003B0000006662782F41393633353835312D344632462D344230382D423046372D3739314545314133324237412F7265736F75726365732F\n310\n636F72652E786D6C8D504B6E833010BD0A9A6D65B00922041947112427E8052C33A156828DFCA97AFC9A40A576D7CDCCE87D344F8F9FBFE667F689CE6B6B3A6039850C8DB2A336530731DC4903D95970676DF82583CCC8193B5861107C72362E3BA4AC096842428D1D7107A5F7182053CF7474E0D507CE32973124857FE48B\n310\n540F3961CEF244279DE03EB81420DB9EAC1384436FA353E879B1B182C7A8C75DA3C7F453DF353A1075D537A7BA6464B8F535A99AE14A9A2BBD90E350DD183B5CFABE3AF262350B1EF4FC9351399401471025A527C218A1E53BAB5A5AB765F5469B96525EACF23FA6B88CFF34456DC2A1DCE36E360F82A5202F42F062ED2BAD\n310\n579969AFDD8A6F504B010214000A0000080000CC70623B3DEE336E79000000790000001B00000000000000000000000000000000006175746F6465736B2D64657369676E2D7061636B6167652E786D6C504B01021400140006080800CC70623BD486FD9CA0000000F40000001300000000000000000000000000B20000005B\n310\n436F6E74656E745F54797065735D2E786D6C504B01021400140006080800CC70623B853B8169EB0000007C010000080000000000000000000000000083010000636F72652E786D6C504B01021400140006080800CC70623B55019EA25F0000007C000000070000000000000000000000000094020000636E782E786D6C504B\n310\n01021400140006080800CC70623BDBABAAF470010000D40300000C00000000000000000000000000180300006662782F636F72652E786D6C504B01021400140006080800CC70623B9C113CC27E0000009D0000000B00000000000000000000000000B20400006662782F636E782E786D6C504B01021400140006080800CC70\n310\n623B7DF2F77C2A010000120200003100000000000000000000000000590500006662782F41393633353835312D344632462D344230382D423046372D3739314545314133324237412F636F72652E786D6C504B01021400140006080800CC70623BAD7543B64E010000330300003000000000000000000000000000D2060000\n310\n6662782F41393633353835312D344632462D344230382D423046372D3739314545314133324237412F636E782E786D6C504B01021400140006080800CC70623BE75B7789680500003C10000034000000000000000000000000006E0800006662782F41393633353835312D344632462D344230382D423046372D3739314545\n310\n314133324237412F6F626A656374732E786D6C504B01021400140006080000CC70623B0000000000000000000000003500000000000000000000000000280E00006662782F41393633353835312D344632462D344230382D423046372D3739314545314133324237412F76657274696365732E62696E504B01021400140006\n310\n080800CC70623BF270F133060000000400000036000000000000000000000000007B0E00006662782F41393633353835312D344632462D344230382D423046372D3739314545314133324237412F747269616E676C65732E62696E504B01021400140006080000CC70623B0000000000000000000000003700000000000000\n310\n000000000000D50E00006662782F41393633353835312D344632462D344230382D423046372D3739314545314133324237412F617474726962757465732E62696E504B01021400140006080800CC70623B08DA0BD1900000004101000036000000000000000000000000002A0F00006662782F41393633353835312D344632\n310\n462D344230382D423046372D3739314545314133324237412F6469726563746F72792E786D6C504B01021400140006080800CC70623BEDD1DC58FD000000A00100003B000000000000000000000000000E1000006662782F41393633353835312D344632462D344230382D423046372D3739314545314133324237412F7265\n310\n736F75726365732F636F72652E786D6C504B0506000000000E000E0080040000641100000000\n0\nXRECORD\n5\n1F8\n102\n{ACAD_REACTORS\n330\n1F7\n102\n}\n330\n1F7\n100\nAcDbXrecord\n280\n1\n70\n1\n90\n429727718\n1\n30362254-06B7-45E0-A893-8CFA70E3D6BC\n310\n504B03040A0000080000CC70623B3DEE336E79000000790000001B0000006175746F6465736B2D64657369676E2D7061636B6167652E786D6C3C3F786D6C2076657273696F6E3D22312E302220656E636F64696E673D227574662D3822203F3E3C666F726D6174733E3C666F726D61743E687474703A2F2F736368656D612E\n310\n6175746F6465736B2E636F6D2F64657369676E2D7061636B6167652F323030393C2F666F726D61743E3C2F666F726D6174733E504B0304140006080800CC70623BD486FD9CA0000000F4000000130000005B436F6E74656E745F54797065735D2E786D6C7D8EC10E82300C865F65E91D8A1E8C310C0EEA1BF002731658846E\n310\nD98AC1B77784ABF1D8FE5FBFBF75BBCE937A534CCEB38643598122B6FEE978D0B0485F9C41B54DDD7D022595594E1A469170414C76A4D9A4D207E29CF43ECE46F218070CC6BECC4078ACAA135ACF422C856C0E68EA1BF5669944DDD7BCDE7B1F8E415D77AECB980613C2E4AC91FC167A2B244592486606FC29C8FD7F045B9A\n310\nEF7053A7E60B504B0304140006080800CC70623B1EC5D7A3EB0000007C01000008000000636F72652E786D6C8D90416EC3201045AF82665B6103C6756C6122AB4D4ED00B204C5C94182C03558F5F9C3852BBEB6A467FFE9B197D71FC9E6FE8CBACC17AD7032D0820E3B41FAD9B7A48F1820F808E52ACDEC75F36404ECDA687\n310\n4D0629A6D5A76597B477D1B89855E747B38B2A041301E95B6E7A08FAD3CCAA50296647B8168BD2573599823EBB0CA76447F43862C7BCCF5EAC59410E4DDD9C7973C2755553CCCFA4C603E3040F1565ED3B1FDE4E432BCA0D9622DAF9795FAF464533826484B498524CD807E51D79ED187F21878E10516EF63F505AC67F42C9\n310\nBA58B1FDDD071640D2FCC87D2045B96591CB3DA85CB7DCE40F504B0304140006080800CC70623B55019EA25F0000007C00000007000000636E782E786D6C4DCB3B0E80201045D1AD90E915ED2CF8AC45050C11660C8261F98AB1B07AC9C97D42D718D865D3E909258CFD00CCE24AC6E326A164D74DC0B4128928FF32603847\n310\n2BA13128B1252AC747C6BAB984FC68F0B87FE8960A5C09FE86CFB69FBA01504B0304140006080800CC70623B8C9102E971010000D40300000C0000006662782F636F72652E786D6CC5535B6E833010BC8AE5DF0A6C08340F1947A84D4ED00B38C6A128602363A31CBFCB234A53A551FA553EC09AD9F5CE8C31DB9E9B1AF5CA\n310\n7695D1198E428A91D2D214952E33ECDD315861B4E5CC1AE3BE9561A445A3323CC098B3D21ADFCE9034DA29ED00D5A6503328BA4E398C640D8B0C77F253352214DE4145770A5B214FA2546114020D759C75CE8200340D19DE981F0F6746269C33EFAB6266AB02A655C74A59CCF365BADC27CB5D902ED22848F6340DF238A141\n310\nBE88E2F57B92BFEDF23523433367AE6A2EEAA455C2A902F398D2751045018D3FA264435F3771F242571B4A1919CA6F9A7C5B3CD9E42BED16F12C776AEB308F40C848FC700B1139D4891EF410CEC810227CC6846F8386402064270EF5C5C709A05E49676C024C61FC95EA45ED154CA5211D1FF4FB8291A913A68E9B83EBBB33\n310\nE2A7673CDE118E5AE8124C0807CB8377834E366998436B950D7A7746DAD846D4CFD978E0F04FD455FC5D49D2D4C6FE9722321F10997F0F32DC47FE05504B0304140006080800CC70623BFFEA85907E0000009D0000000B0000006662782F636E782E786D6C4DCCD10A83201886E15B91FFDC95D95A811AB6F23E625948A6C3\n310\nE9D8E5AF46073BFAE0E1E365ED67B3E8ADC3CB78C7815C7240DA3DFC64DCC221C519D7805AC182F7F1EF06C88D9BE6703008B6049F9E274D7A1E938DBB5AE3D6131B2589BA0D3D965551E0B2EA732C9B9A624AAEB41E3A557677029960D9AFB4EF11165F504B0304140006080800CC70623B4FEEA4082C0100001202000031\n310\n0000006662782F39464131463745442D413632322D343644302D413938332D3331353338454246344243312F636F72652E786D6C8D515B6EC32010BC0AE2AB55850DD871ED0813254D72825EC00192A2C460F1A872FC42ED48ED5F7E00CDCECCCEB26C731F6FE05B39AFADE921293004CA082BB5B9F43086336A21D870E6AC\n310\n0D7F68109861543DCC30E4ECE26C9C164858139409093556AA051CBC570102714B8F1E7AF1A5C6A11862480C7F2DA6415C878B2A4891CA89C7990F2E050073937C42DE1DB7E4F87ED8A36D4329AA9B3D46DBAEAD504556557BD81DEBDD0761E52CE42C462D17B996298E3E6BE59E35C962CE821E1FF18553435012728A7187\n310\n0841987E927A8D9B35ADDF70BBC6989599FE4F1427F9A4286A132ABAC49D651EF234CD5CE04CDA78BA3DC2A8FB645D00B9DF8B57E215725C60BCA2A463E54C4CE327C7A65E1C7DB02E7DEFCBF594B864C5CA6CDBD49C957943E9FA5D5FBAF336F90F504B0304140006080800CC70623BAD7543B64E01000033030000300000\n310\n006662782F39464131463745442D413632322D343644302D413938332D3331353338454246344243312F636E782E786D6CD593CD6EC32010845F0571AD6CE3D48AD20813A9873E410FBD12D82434182C7EAAE6EDBB2424CD25871E7B41D6EC30B3FA84F9E67BB2E40B4234DE8DB46F1925E094D7C6ED479AD3AE5951B2113C\n310\n789FEE6C943839C1488B4C05DF079FE72A69D8C96C13AAD6B8631503449F83828872B949AC57D26200B826A308D316B4064D6E46FCDA41C05550DC9E483A00797BFD207EFB092A45DE9514C1BBD22178396BD39D891265658C238DEA00936C654E5E433CB65A26D9F6EDB5EBC14EBF49A45CB856E66048291F6939A9A81BB5\n310\nC8917738143CA680F4AA299D66A042CEB3354A2684DC9D8D178FE0D9B8B41CAAD720F880EE7EF93C0C18769E099ECC04D5A102C8049A8A05632F4DDF376CF1DE0F6BB65C2F8627B65A33C6BB62177CEBBDAD973006829F89F22E814B54F4BC2BE347F8AA8F681390B50FA73F804400B5F542E796F19FF974E7F78DB802FE05\n310\nE207504B0304140006080800CC70623B16AB87BA640500003C100000340000006662782F39464131463745442D413632322D343644302D413938332D3331353338454246344243312F6F626A656374732E786D6CAD575B6FA33818FD2B887DE6924B3BED8A326A92B68A663B534DD4D13E548A0C38942D60649B369D5FBFC7\n310\n600890A493BDE42160637FD7F31D7FF63E6FB3D478A55C242CBF3247B66B1A340F5994E4F19559CA8D75611A9F7D8F33263BCB4C232719BD32D5B4E97B316765A1A722BA21652A07B3B7B33F0D11D29C9A46981221AE4C113ED38CD8A4942CA2E2C58E882476BCD9DA23BB5ED8171B73523C0F841684D35CC252CCE79062D4\n310\n468DFA43D7747CCF51DF7D4FFDEB5593E3AB9CCA9FBEFE241792E4E19EB28198C968BAB8199F5D5A67D3E9C49A9E8F47D6EC76B6B0469F26EEFC7C3EBFBCBEB98462213924694B38DD98FE1D62C393D073EA4FADC5DAF04326852CCF6958F90F0F2B9BB5C48816348F90C7840A68EB78EDF68723159BCEE7891A6B95DDE9D3\n310\nBCEAEEE8086A6C6F9E5D4B59F0175C10A7A0820BAA5055C7473B5AE3CFDD452D602CD5DF12616444529E90D448938013FE6EFA58AA96F85E4F8C42275708571E98FE6827AF6B2B4AE3D7D83D64E5A64C53054DD3AF90BD06FEA9149565C94FCA0F6B834DC85599E4F2423B24DF0B6AFA979E534DFA9E7A4CC6FA631D486393\n310\n921829879BF5D781A373557BCB85E97FB90DB62B558F8795179C15944B051F40AB495CF35451D26A4727654E6D8033BD98EF82F21D91FF8AF2DD9982BCF1643BDD4EB516C9492E368C67C88DED563FC36D5EACF66DFF057C3658BDBFA69DF9578B3DA735B64F18C7F20770A9D45CFCF7FCF563D6456A277DBEF78A02637CA2\n310\n43B90A490AEAB94F72244481D24819A6C0E59B606BFA4B3025981DBB48EAB701D97BF19C577CC77F2D1B6C55A9EF3C732474C0B727303F625995056C3B02963D9EAC146BE78EC5FCEC7FA999EBC5EACBAAE41B12D27B4D2C0BBA49F244E2ECDC81B76B502F113D8F5EE8FB1BE3111CDD4FC2AA9B844CAB1288B68AB90A7CDC\n310\n1C166AB0D3DC5310625FCC14E779BFD0709F8890A629C9292B1B2DED31A4B0DA928CEE135085754027E3018A397D4D5427D15BD1330B677DC8934285AC3DF45A9EB68FF8F2B8FC0A509AFEECFD0FF2DE25CC6047F7214B195F07EFEB9A094D800F7BFAE8FED187B78EA8A3A400F115961BCAD1215E47C966530AF0EE8128FE\n310\n58CEBB996A8964FFA529A046635D9353B0336A8F700DDF46271A024E70B0B37C9DE01847591E54DED53D54202AB947E4076556AC49C6CA5C9E1226B7F1A7B1BE15DEED62C41B91E1B3E9AFAAA735036547343A925075041DF0A9979E893B391F8FCFA6967B3EFB644DCF6E5CEBFAE272625DCC6FAF3FB93793C5F90CE1EF57\n310\n407342756B10D1C489E8953CD1617E5CEECAD6F4EF8914CE5D5D504E5C3F1F9736DA62CFC11E00BCDDB8CC8A9466349744C1F75EBDA4DF09BA8A9E8C7A7E9991989E20E5DBDD6A6003664ED8F7A04A8DBE0DF6EAD9B9AA858342E47399053949D2C146EDB85DE4B176BB0965FBAC19BD19AA918E27FA50C1D22402E144464C\n310\n59462568E704B6E71915404CB72B8FF4EDE184DDAF753F284990D2C6926782963815403548A70C657FDEF80D2D9CEAA2AE4C1C76F60BFE74219A06527D6582DF6412526107381E55E353090704D085B52408D0933C4ED159D79BDA71BB4BC506F4831350EB6F979CD22D69BF7AC49B91A2C0A9DDA3D5CA36AD20FC478E37E6\n310\n1844E2352865EBCB6EA275A652E3836BE04EFB400BF1A2556F515F1FBB35B2AB35BD889C744FFA1004B5544B121E57F70215746DD2F5E2C1412B602CBF19455AC6C8E5E9922C4E01E65215385004546899059180EAFCF7A707CE7017CD8CDB0410789AB32C63B91E5CEBBBACB17AC6CD347A022D5075FD106377347AAABA7E\n310\n7D11590744509B44E205134DC1290F06580320F78E537D3D73540E06CB970B431F185308AD40BBD794D6D77003C5A36E8EAA54BA64597CD8F83BD552A080A365F7FF06504B0304140006080000CC70623B000000000000000000000000350000006662782F39464131463745442D413632322D343644302D413938332D3331\n310\n353338454246344243312F76657274696365732E62696E504B0304140006080800CC70623BF270F1330600000004000000360000006662782F39464131463745442D413632322D343644302D413938332D3331353338454246344243312F747269616E676C65732E62696E636660600000504B0304140006080000CC70623B\n310\n000000000000000000000000370000006662782F39464131463745442D413632322D343644302D413938332D3331353338454246344243312F617474726962757465732E62696E504B0304140006080800CC70623B08DA0BD19000000041010000360000006662782F39464131463745442D413632322D343644302D413938\n310\n332D3331353338454246344243312F6469726563746F72792E786D6C858F410AC3201045AF22B36F53E9A60B35CBEEBAE80D244E44489C6234F4F835464A48035D0DF398FF9F8AF63D0E6CC63039F212F8F9020C7D47C6792B21C5FE7403D62A1188E2E60C98D7234A5830286103A55745067B9D86B8A3CF9C7F90C11DE607\n310\nFB144396D7B6A82D282E9A152AD114D5EF2CB866EEE831B8EEA07A7BB5A8D7D61A2BAAEB7FD5F70921FF497D00504B0304140006080800CC70623B0D6EF93BFE000000A00100003B0000006662782F39464131463745442D413632322D343644302D413938332D3331353338454246344243312F7265736F75726365732F63\n310\n6F72652E786D6C8D50596E833010BD0A9ADFCA60B334011947A8694ED00B586642AC041B79A97AFC9A40A5F6AF3F33A3B7689E1E3F7DCD8FEC139DD7D6F4C0720A191A65476DA61E62B892236427C19DB5E1970C322367EC618541F0C9D9B8EC90B226A009093576C41D94DE63804C3DD2D18357379C652E63480A7FCF17A9\n310\nEE72C29CE5894E3AC17D702940B63D59270887DE46A7D0F36263058F518FBB468FE9A7BE6A7420864373B8D4873369AA8691FA421B3294352543C5CAF65C0F6FEF43CB8BD52C78D0F34F46E550061C419494B6843142CB0F5677F4B52BEB177AEC28E5C52AFF638ACBF84F53D42654E51E77B379102C05791282176B5F693D\n310\nCB4C7BED567C03504B010214000A0000080000CC70623B3DEE336E79000000790000001B00000000000000000000000000000000006175746F6465736B2D64657369676E2D7061636B6167652E786D6C504B01021400140006080800CC70623BD486FD9CA0000000F40000001300000000000000000000000000B20000005B\n310\n436F6E74656E745F54797065735D2E786D6C504B01021400140006080800CC70623B1EC5D7A3EB0000007C010000080000000000000000000000000083010000636F72652E786D6C504B01021400140006080800CC70623B55019EA25F0000007C000000070000000000000000000000000094020000636E782E786D6C504B\n310\n01021400140006080800CC70623B8C9102E971010000D40300000C00000000000000000000000000180300006662782F636F72652E786D6C504B01021400140006080800CC70623BFFEA85907E0000009D0000000B00000000000000000000000000B30400006662782F636E782E786D6C504B01021400140006080800CC70\n310\n623B4FEEA4082C0100001202000031000000000000000000000000005A0500006662782F39464131463745442D413632322D343644302D413938332D3331353338454246344243312F636F72652E786D6C504B01021400140006080800CC70623BAD7543B64E010000330300003000000000000000000000000000D5060000\n310\n6662782F39464131463745442D413632322D343644302D413938332D3331353338454246344243312F636E782E786D6C504B01021400140006080800CC70623B16AB87BA640500003C1000003400000000000000000000000000710800006662782F39464131463745442D413632322D343644302D413938332D3331353338\n310\n454246344243312F6F626A656374732E786D6C504B01021400140006080000CC70623B0000000000000000000000003500000000000000000000000000270E00006662782F39464131463745442D413632322D343644302D413938332D3331353338454246344243312F76657274696365732E62696E504B01021400140006\n310\n080800CC70623BF270F133060000000400000036000000000000000000000000007A0E00006662782F39464131463745442D413632322D343644302D413938332D3331353338454246344243312F747269616E676C65732E62696E504B01021400140006080000CC70623B0000000000000000000000003700000000000000\n310\n000000000000D40E00006662782F39464131463745442D413632322D343644302D413938332D3331353338454246344243312F617474726962757465732E62696E504B01021400140006080800CC70623B08DA0BD190000000410100003600000000000000000000000000290F00006662782F39464131463745442D413632\n310\n322D343644302D413938332D3331353338454246344243312F6469726563746F72792E786D6C504B01021400140006080800CC70623B0D6EF93BFE000000A00100003B000000000000000000000000000D1000006662782F39464131463745442D413632322D343644302D413938332D3331353338454246344243312F7265\n310\n736F75726365732F636F72652E786D6C504B0506000000000E000E0080040000641100000000\n0\nXRECORD\n5\n175\n102\n{ACAD_REACTORS\n330\n173\n102\n}\n330\n173\n100\nAcDbXrecord\n280\n1\n270\n1\n271\n1\n0\nXRECORD\n5\n174\n102\n{ACAD_REACTORS\n330\n173\n102\n}\n330\n173\n100\nAcDbXrecord\n280\n1\n270\n1\n271\n1\n0\nXRECORD\n5\n1FB\n102\n{ACAD_REACTORS\n330\n173\n102\n}\n330\n173\n100\nAcDbXrecord\n280\n1\n70\n0\n90\n1673772943\n1\nECE7A1D2-D628-4531-984C-D00F80459256\n310\n504B03040A0000080000CC70623B3DEE336E79000000790000001B0000006175746F6465736B2D64657369676E2D7061636B6167652E786D6C3C3F786D6C2076657273696F6E3D22312E302220656E636F64696E673D227574662D3822203F3E3C666F726D6174733E3C666F726D61743E687474703A2F2F736368656D612E\n310\n6175746F6465736B2E636F6D2F64657369676E2D7061636B6167652F323030393C2F666F726D61743E3C2F666F726D6174733E504B0304140006080800CC70623BD486FD9CA0000000F4000000130000005B436F6E74656E745F54797065735D2E786D6C7D8EC10E82300C865F65E91D8A1E8C310C0EEA1BF002731658846E\n310\nD98AC1B77784ABF1D8FE5FBFBF75BBCE937A534CCEB38643598122B6FEE978D0B0485F9C41B54DDD7D022595594E1A469170414C76A4D9A4D207E29CF43ECE46F218070CC6BECC4078ACAA135ACF422C856C0E68EA1BF5669944DDD7BCDE7B1F8E415D77AECB980613C2E4AC91FC167A2B244592486606FC29C8FD7F045B9A\n310\nEF7053A7E60B504B0304140006080800CC70623BD9DDAED0EC0000007C01000008000000636F72652E786D6C8D90416EC3201045AF82665B61836D9CD8C2444DD39CA01740405C94182C03558F5F9C3852BBEB6A467FFE9B197D7EF89E6EE8CB2CC17A37002D0820E394D7D68D03A478C17B4007C117EFE32F1B20272733C0\n310\n2A83E0E3E2D3BC49CABB685CCCAAF3DA6CA20CC14440EA969B0182FA34932C648AD911AEC52CD5558EA6A0CF2EC329598D1E47ACCEFBECC59A050463A7EA5833865FEBDD0E37353BE3EE8DBDE3F6786A48D375FBF6CC78B9C282473B3DEFABC5C86834888A900E538A49F5419B9EB47DD5BC907D4F082F57FB1F28CDFA9F50\n310\nB22ED6D5F6EE030B20687EE43E10BC5CB3C8E51E54AE6B6EE207504B0304140006080800CC70623B55019EA25F0000007C00000007000000636E782E786D6C4DCB3B0E80201045D1AD90E915ED2CF8AC45050C11660C8261F98AB1B07AC9C97D42D718D865D3E909258CFD00CCE24AC6E326A164D74DC0B4128928FF326038\n310\n472BA13128B1252AC747C6BAB984FC68F0B87FE8960A5C09FE86CFB69FBA01504B0304140006080800CC70623BA24EB22D72010000D40300000C0000006662782F636F72652E786D6CC5535B6E833010BC8AE5DF0A6C5E49888CA3A6694ED00B38E05014B091B1518EDFE511A5A9D228FD2A1F60CDEC7A67C6986DCE4D8D7A\n310\n69BA4AAB0C073EC548AA5C17952A33ECECD15B61B4E1CC686DBF9561A44423333CC098B3D268D7CE50AE9595CA02AA74216750749DB418E5352C32DCE59FB211BE70162ABA93DF8AFC244AE9073ED050C759670D0840D390E18DF9F1706664C23973AE2A66B62A605A75ACA4C13C4976E1364A12EF355A2EBD384AF65EFA96\n310\nBC7B8BED2EA6719AAE16FB8491A199335B351775B991C2CA02F390D2D40B028F861F41BCA68B7518BFD0D59A524686F29B26D7164F36B94AD9289CE54E6D1DE6010819891F6E21228B3AD1831EC219194284CF98F06DD01008846CC5A1BEF83801D4CBDC6A1303536877A57A513B0953A94FC707FDBE6064EA84A9E3E6E0FA\n310\nEE8CF0E9198F7784A316AA0413C2C2F2E0ECA0934D1AE6D05A69BCDE9E91D2A611F573361E38FC1375157F5752AE6B6DFE4B11990F88CCBF0719EE23FF02504B0304140006080800CC70623B408A7D3B7C0000009D0000000B0000006662782F636E782E786D6C4DCCD10A83201886E15B91FFDC552A92A0064DBC8F581632\n310\nD3703A76F9ABD1C18E3E78F878E5F0D9027ABBFCF2292AE86E2D20171F69F6715550CB827B40839639A5F2770314A7CD293819B45C73AAFB45B35BA61ACAA1C1C7E7855C58C15BC331339661262CC762340413D68D77DA5B42298546CBE6573AF60CEB2F504B0304140006080800CC70623B449FB9BD290100001202000031\n310\n0000006662782F36394639363044362D344446342D343946362D394244322D3234314243333846323333332F636F72652E786D6C8D515B6EC32010BC0AE22B55850D98B871848994463E412FE002495162B07854397EA176A4F62F3F2C9A9D991D587EB84F37F0AD7D30CEF6905418026DA553C65E7A98E219ED203808EE9D\n310\n8B7F6810D871D23D2C3014FCE25D9A57483A1BB58D19B54EE9151C43D0110279CB971E06F9A5A7B11A53CC8C70ADE6515EC78BAE4895DB992778883E0700CB907242D17643D7E2538BD869608875438BBAE38922CAC8F1BDD90DB4691A5E2F42C153326A951B95E398B3D1FE599322163C9AE9115F7A3D46ADA0A018778810\n310\n84E907617BDCEE297BC5BB3DC6BC2EF47FA234AB2745C9D8D8D035EE220B50105E2F0DC1954B9FB747187D9F9D8FA0CCDB042D5FA0C015C65B42DF78BD10F3F3B363CB56C7109DCFDFBBB97E662ED92EB62D13BC2E1BCAE5777DB9966D8A1F504B0304140006080800CC70623BAD7543B64E01000033030000300000006662\n310\n782F36394639363044362D344446342D343946362D394244322D3234314243333846323333332F636E782E786D6CD593CD6EC32010845F0571AD6CE3D48AD20813A9873E410FBD12D82434182C7EAAE6EDBB2424CD25871E7B41D6EC30B3FA84F9E67BB2E40B4234DE8DB46F1925E094D7C6ED479AD3AE5951B2113C789FEE\n310\n6C943839C1488B4C05DF079FE72A69D8C96C13AAD6B8631503449F83828872B949AC57D26200B826A308D316B4064D6E46FCDA41C05550DC9E483A00797BFD207EFB092A45DE9514C1BBD22178396BD39D891265658C238DEA00936C654E5E433CB65A26D9F6EDB5EBC14EBF49A45CB856E66048291F6939A9A81BB5C89177\n310\n38143CA680F4AA299D66A042CEB3354A2684DC9D8D178FE0D9B8B41CAAD720F880EE7EF93C0C18769E099ECC04D5A102C8049A8A05632F4DDF376CF1DE0F6BB65C2F8627B65A33C6BB62177CEBBDAD973006829F89F22E814B54F4BC2BE347F8AA8F681390B50FA73F804400B5F542E796F19FF974E7F78DB802FE05E20750\n310\n4B0304140006080800CC70623B8D05915C650500003B100000340000006662782F36394639363044362D344446342D343946362D394244322D3234314243333846323333332F6F626A656374732E786D6CAD575B6FA33814FE2B887D06429276DA1565D4266D158D3A339A6846FB502932E050B66023DB74D2FDF5FB190C01\n310\n9276B2973C046C8ECFF53B17071F77456EBD502133CEAE6CDF9DD81665314F32965ED995DA3A17B6F5310C04E7AA47665B8C14F4CAD6DB7618A48257A5D94AE89654B91AEDDEDDFC61C998326A5B714EA4BCB265FC440BE2924AF184CA6737218AB8E976E7FA6E4338649B0A523E8D98964450A6A029F619B8588D52FE7039\n310\nB1BD30F0F4F730D0FF866AF6369557DB33949F31A9088B0F848DD8CCFCF9F2767A76E99CCDE733677E3EF59D9BBB9BA5E37F984D16E78BC5E5F5ED25044B25C0C96822E8D60EEFE11B91C581D77CEA34368A1F5329E68CD1B8B61F16D63A1B8E092D294B10C78C4A48EB593D192E7DED9BDEE7995E1B91FDEDD3ACEA9FE831\n310\n6A756F9F7D4D79F4274C90A7A04248AA51D5F8C718DAE06FB2F75AC4796EBE65D22A88A22223B995679120E2D50E41AA49C260C046A35368846B0BECD0DFF3EBEB8AD4F835768F69B9ADF25C43D30E6B646F807FAA64AD59F61715C7A54127C4AACA98BA3006A9D792DAE165E0D59B61A01FB3A9F9D838D2DAE62445C86166\n310\nF37564E842E7DE6A69879FEEA2DD5AE7E371E1A5E025154AC307D06A03D73EB5978C58FFA4C8E9033066E0F3BD53BEC1F39F91BE7B55103791EDE6BBB991A2046172CB4581D8B893FA674DDA17A77B3B7C413D1B511FD2743BFF8A38F03A658705E3ADF8015C3A3417FF3D7E439FF591DA0B5F18BC20C1B8981957AE6392A3\n310\nF43C640C01D1A0B4728E2DD4F26DB4B3C3152A252A3B4E913CEC1C72F012782FF88EFF8637AA552DBEF76408E8A8DE9E50F9E1CB3A2DA0DB1B6039A893B56063DC5B3E3FFB5F72E67AB9FEB4AEC496C4F4C1149625DD662C53E89D7BF0F6151A046260D1337DFDC94502430F83B0EE07A130A224BCAD7DAE1D9FB6CD422FF6\n310\n920702629C4BB9AE79C12F243C6432A6794E18E5552BA56B431AAB5D91317302B2B071E86C3A42B1A02F999E24061403B5D0EB639195DA655DD3EBEAB4FB862DDF579F014AD0E73C22F99E28DA57FB98E75C6CA2D74D53086D600F4786E0FE3144B771A8A7B900F03594DB8A633CBC49B2EDB69228BB479CF863B5E807AAAB\n310\n23872F6DFEB4129B949CA33823F58830E86D65621E10047D9DB34D862E8EAC3C2ABC2F7B2C40D67CDFE01F5545B92105AF983AC54D93D69E56FB8E797F88913F898A9FEC705D3F9D1B54EC8426FB500D40A03BD0119B06E1B95DDC7EB8F6975367793EBD70E66733DFB9BC982F9CE564727731999F5D4ECFCE3B8D6A4DC2A0\n310\n6D50FD148437D110834A64C6CDDF57FBACB5C307A2A477DFE4939736CFEF2B175371E0E10CF0DD1D5C15654E0BCA14D1E87DD02FF93782A162C0A3D95F1524A52770F972BF1EE9809D13CE7DD599467F8ECE9ADD85CE85A34CD45355448C64F9E8A031DC2D596ACC6E5DD93D9B82DE2EF5CAF81363A8E47996A0DE24564A79\n310\n4115AACE09C55E14540231FDA13C319787134EBF34E3A022514E5B4D9E0826E25C02D5805B15ABE1BEF51B26383D445DD9E875EE33FE4C22DA16427D65A3BCA92CA6D28DD01DF5DC53330704308475351050232CCD31583787BA75774AFB06E5070DD0C8EF484E19968C5D83BA5B90B244D31E54D55A372320FE4786B7EA58\n310\n44E135AA5467CB7EA333A61683CC6A8C3257034C10CF46F40EF9F5BE59BE5BD30C3C72D235E95D10345C1D45445A5F0BB47E46A5EBE5570F9380B5FA629579952296A773720405982B9DE04011506178964401AA8BDF1FBF0A8EAB6861DD6580C0E38217056766716DAEB2D6FA0917D3E4116581EADB879C4E7CFFB11EFACD\n310\n3D641311495D92C8676CB409A72D18610D803CE8A626049E8EC1887CB5B44CC39883690DDA8399B4B9855B481E7D71D4A9D22F96E5BB73BF5793020C02137BF837504B0304140006080000CC70623B000000000000000000000000350000006662782F36394639363044362D344446342D343946362D394244322D32343142\n310\n43333846323333332F76657274696365732E62696E504B0304140006080800CC70623BF270F1330600000004000000360000006662782F36394639363044362D344446342D343946362D394244322D3234314243333846323333332F747269616E676C65732E62696E636660600000504B0304140006080000CC70623B0000\n310\n00000000000000000000370000006662782F36394639363044362D344446342D343946362D394244322D3234314243333846323333332F617474726962757465732E62696E504B0304140006080800CC70623B08DA0BD19000000041010000360000006662782F36394639363044362D344446342D343946362D394244322D\n310\n3234314243333846323333332F6469726563746F72792E786D6C858F410AC3201045AF22B36F53E9A60B35CBEEBAE80D244E44489C6234F4F835464A48035D0DF398FF9F8AF63D0E6CC63039F212F8F9020C7D47C6792B21C5FE7403D62A1188E2E60C98D7234A5830286103A55745067B9D86B8A3CF9C7F90C11DE607FB14\n310\n4396D7B6A82D282E9A152AD114D5EF2CB866EEE831B8EEA07A7BB5A8D7D61A2BAAEB7FD5F70921FF497D00504B0304140006080800CC70623BCA768048FE000000A00100003B0000006662782F36394639363044362D344446342D343946362D394244322D3234314243333846323333332F7265736F75726365732F636F72\n310\n652E786D6C8D50596E833010BD0A9ADFCA60D600328E9AA639412F609909B1126CE4A5EAF16B0295DABFFECC8CDEA2797AECF8353F924FB44E193D409E5248504B332A3D0D10FC95B4901C39B3C6F85F3248B49871801506CE266BC2B243D2688FDA47549B11775038871E12F988C7004EDE7016A9083E2ADC3D5D84BC8B09\n310\nD33C8D74D471E6BC8D0192EDC93A815B742658898E651BCB59086ADC356A8C3FD555A1055ED7E7E254D615792D0F075295F585746FF53B694EE78A565DD736979A65AB9933AFE69F8CD2A2F038022F28ED489E135A7CE4554F9BBEA85E68DB53CAB255FEC71496F19FA6A0B42F8B3DEE6673C0F318E4497096AD7DC5F52C33\n310\nEEB55BFE0D504B010214000A0000080000CC70623B3DEE336E79000000790000001B00000000000000000000000000000000006175746F6465736B2D64657369676E2D7061636B6167652E786D6C504B01021400140006080800CC70623BD486FD9CA0000000F40000001300000000000000000000000000B20000005B436F\n310\n6E74656E745F54797065735D2E786D6C504B01021400140006080800CC70623BD9DDAED0EC0000007C010000080000000000000000000000000083010000636F72652E786D6C504B01021400140006080800CC70623B55019EA25F0000007C000000070000000000000000000000000095020000636E782E786D6C504B0102\n310\n1400140006080800CC70623BA24EB22D72010000D40300000C00000000000000000000000000190300006662782F636F72652E786D6C504B01021400140006080800CC70623B408A7D3B7C0000009D0000000B00000000000000000000000000B50400006662782F636E782E786D6C504B01021400140006080800CC70623B\n310\n449FB9BD290100001202000031000000000000000000000000005A0500006662782F36394639363044362D344446342D343946362D394244322D3234314243333846323333332F636F72652E786D6C504B01021400140006080800CC70623BAD7543B64E010000330300003000000000000000000000000000D20600006662\n310\n782F36394639363044362D344446342D343946362D394244322D3234314243333846323333332F636E782E786D6C504B01021400140006080800CC70623B8D05915C650500003B10000034000000000000000000000000006E0800006662782F36394639363044362D344446342D343946362D394244322D32343142433338\n310\n46323333332F6F626A656374732E786D6C504B01021400140006080000CC70623B0000000000000000000000003500000000000000000000000000250E00006662782F36394639363044362D344446342D343946362D394244322D3234314243333846323333332F76657274696365732E62696E504B010214001400060808\n310\n00CC70623BF270F13306000000040000003600000000000000000000000000780E00006662782F36394639363044362D344446342D343946362D394244322D3234314243333846323333332F747269616E676C65732E62696E504B01021400140006080000CC70623B00000000000000000000000037000000000000000000\n310\n00000000D20E00006662782F36394639363044362D344446342D343946362D394244322D3234314243333846323333332F617474726962757465732E62696E504B01021400140006080800CC70623B08DA0BD190000000410100003600000000000000000000000000270F00006662782F36394639363044362D344446342D\n310\n343946362D394244322D3234314243333846323333332F6469726563746F72792E786D6C504B01021400140006080800CC70623BCA768048FE000000A00100003B000000000000000000000000000B1000006662782F36394639363044362D344446342D343946362D394244322D3234314243333846323333332F7265736F\n310\n75726365732F636F72652E786D6C504B0506000000000E000E0080040000621100000000\n0\nXRECORD\n5\n176\n102\n{ACAD_REACTORS\n330\n173\n102\n}\n330\n173\n100\nAcDbXrecord\n280\n1\n270\n1\n271\n1\n0\nXRECORD\n5\n177\n102\n{ACAD_REACTORS\n330\n173\n102\n}\n330\n173\n100\nAcDbXrecord\n280\n1\n270\n1\n271\n1\n0\nXRECORD\n5\n294\n102\n{ACAD_REACTORS\n330\n293\n102\n}\n330\n293\n100\nAcDbXrecord\n280\n1\n102\nDISPLAYNAME\n1\nMetric50\n102\nFLAGS\n90\n0\n0\nCELLSTYLEMAP\n5\n289\n102\n{ACAD_REACTORS\n330\n162\n102\n}\n330\n162\n100\nAcDbCellStyleMap\n90\n3\n300\nCELLSTYLE\n1\nTABLEFORMAT_BEGIN\n90\n5\n170\n1\n91\n0\n92\n32768\n62\n257\n93\n1\n300\nCONTENTFORMAT\n1\nCONTENTFORMAT_BEGIN\n90\n0\n91\n0\n92\n512\n93\n0\n300\n\n40\n0.0\n140\n1.0\n94\n5\n62\n0\n340\n11\n144\n6.0\n309\nCONTENTFORMAT_END\n171\n1\n301\nMARGIN\n1\nCELLMARGIN_BEGIN\n40\n1.5\n40\n1.5\n40\n1.5\n40\n1.5\n40\n4.5\n40\n4.5\n309\nCELLMARGIN_END\n94\n6\n95\n1\n302\nGRIDFORMAT\n1\nGRIDFORMAT_BEGIN\n90\n0\n91\n1\n62\n0\n92\n-2\n340\n14\n93\n0\n40\n1.125\n309\nGRIDFORMAT_END\n95\n2\n302\nGRIDFORMAT\n1\nGRIDFORMAT_BEGIN\n90\n0\n91\n1\n62\n0\n92\n-2\n340\n14\n93\n0\n40\n1.125\n309\nGRIDFORMAT_END\n95\n4\n302\nGRIDFORMAT\n1\nGRIDFORMAT_BEGIN\n90\n0\n91\n1\n62\n0\n92\n-2\n340\n14\n93\n0\n40\n1.125\n309\nGRIDFORMAT_END\n95\n8\n302\nGRIDFORMAT\n1\nGRIDFORMAT_BEGIN\n90\n0\n91\n1\n62\n0\n92\n-2\n340\n14\n93\n0\n40\n1.125\n309\nGRIDFORMAT_END\n95\n16\n302\nGRIDFORMAT\n1\nGRIDFORMAT_BEGIN\n90\n0\n91\n1\n62\n0\n92\n-2\n340\n14\n93\n0\n40\n1.125\n309\nGRIDFORMAT_END\n95\n32\n302\nGRIDFORMAT\n1\nGRIDFORMAT_BEGIN\n90\n0\n91\n1\n62\n0\n92\n-2\n340\n14\n93\n0\n40\n1.125\n309\nGRIDFORMAT_END\n309\nTABLEFORMAT_END\n1\nCELLSTYLE_BEGIN\n90\n1\n91\n1\n300\n_TITLE\n309\nCELLSTYLE_END\n300\nCELLSTYLE\n1\nTABLEFORMAT_BEGIN\n90\n5\n170\n1\n91\n0\n92\n0\n62\n257\n93\n1\n300\nCONTENTFORMAT\n1\nCONTENTFORMAT_BEGIN\n90\n0\n91\n0\n92\n512\n93\n0\n300\n\n40\n0.0\n140\n1.0\n94\n5\n62\n0\n340\n11\n144\n4.5\n309\nCONTENTFORMAT_END\n171\n1\n301\nMARGIN\n1\nCELLMARGIN_BEGIN\n40\n1.5\n40\n1.5\n40\n1.5\n40\n1.5\n40\n4.5\n40\n4.5\n309\nCELLMARGIN_END\n94\n6\n95\n1\n302\nGRIDFORMAT\n1\nGRIDFORMAT_BEGIN\n90\n0\n91\n1\n62\n0\n92\n-2\n340\n14\n93\n0\n40\n1.125\n309\nGRIDFORMAT_END\n95\n2\n302\nGRIDFORMAT\n1\nGRIDFORMAT_BEGIN\n90\n0\n91\n1\n62\n0\n92\n-2\n340\n14\n93\n0\n40\n1.125\n309\nGRIDFORMAT_END\n95\n4\n302\nGRIDFORMAT\n1\nGRIDFORMAT_BEGIN\n90\n0\n91\n1\n62\n0\n92\n-2\n340\n14\n93\n0\n40\n1.125\n309\nGRIDFORMAT_END\n95\n8\n302\nGRIDFORMAT\n1\nGRIDFORMAT_BEGIN\n90\n0\n91\n1\n62\n0\n92\n-2\n340\n14\n93\n0\n40\n1.125\n309\nGRIDFORMAT_END\n95\n16\n302\nGRIDFORMAT\n1\nGRIDFORMAT_BEGIN\n90\n0\n91\n1\n62\n0\n92\n-2\n340\n14\n93\n0\n40\n1.125\n309\nGRIDFORMAT_END\n95\n32\n302\nGRIDFORMAT\n1\nGRIDFORMAT_BEGIN\n90\n0\n91\n1\n62\n0\n92\n-2\n340\n14\n93\n0\n40\n1.125\n309\nGRIDFORMAT_END\n309\nTABLEFORMAT_END\n1\nCELLSTYLE_BEGIN\n90\n2\n91\n1\n300\n_HEADER\n309\nCELLSTYLE_END\n300\nCELLSTYLE\n1\nTABLEFORMAT_BEGIN\n90\n5\n170\n1\n91\n0\n92\n0\n62\n257\n93\n1\n300\nCONTENTFORMAT\n1\nCONTENTFORMAT_BEGIN\n90\n0\n91\n0\n92\n512\n93\n0\n300\n\n40\n0.0\n140\n1.0\n94\n2\n62\n0\n340\n11\n144\n4.5\n309\nCONTENTFORMAT_END\n171\n1\n301\nMARGIN\n1\nCELLMARGIN_BEGIN\n40\n1.5\n40\n1.5\n40\n1.5\n40\n1.5\n40\n4.5\n40\n4.5\n309\nCELLMARGIN_END\n94\n6\n95\n1\n302\nGRIDFORMAT\n1\nGRIDFORMAT_BEGIN\n90\n0\n91\n1\n62\n0\n92\n-2\n340\n14\n93\n0\n40\n1.125\n309\nGRIDFORMAT_END\n95\n2\n302\nGRIDFORMAT\n1\nGRIDFORMAT_BEGIN\n90\n0\n91\n1\n62\n0\n92\n-2\n340\n14\n93\n0\n40\n1.125\n309\nGRIDFORMAT_END\n95\n4\n302\nGRIDFORMAT\n1\nGRIDFORMAT_BEGIN\n90\n0\n91\n1\n62\n0\n92\n-2\n340\n14\n93\n0\n40\n1.125\n309\nGRIDFORMAT_END\n95\n8\n302\nGRIDFORMAT\n1\nGRIDFORMAT_BEGIN\n90\n0\n91\n1\n62\n0\n92\n-2\n340\n14\n93\n0\n40\n1.125\n309\nGRIDFORMAT_END\n95\n16\n302\nGRIDFORMAT\n1\nGRIDFORMAT_BEGIN\n90\n0\n91\n1\n62\n0\n92\n-2\n340\n14\n93\n0\n40\n1.125\n309\nGRIDFORMAT_END\n95\n32\n302\nGRIDFORMAT\n1\nGRIDFORMAT_BEGIN\n90\n0\n91\n1\n62\n0\n92\n-2\n340\n14\n93\n0\n40\n1.125\n309\nGRIDFORMAT_END\n309\nTABLEFORMAT_END\n1\nCELLSTYLE_BEGIN\n90\n3\n91\n2\n300\n_DATA\n309\nCELLSTYLE_END\n0\nENDSEC\n0\nSECTION\n2\nACDSDATA\n70\n2\n71\n8\n0\nACDSSCHEMA\n90\n0\n1\nAcDb_Thumbnail_Schema\n2\nAcDbDs::ID\n280\n10\n91\n8\n2\nThumbnail_Data\n280\n15\n91\n0\n101\nACDSRECORD\n95\n0\n90\n1\n2\nAcDbDs::TreatedAsObjectData\n280\n1\n291\n1\n101\nACDSRECORD\n95\n0\n90\n2\n2\nAcDbDs::Legacy\n280\n1\n291\n1\n101\nACDSRECORD\n1\nAcDbDs::ID\n90\n3\n2\nAcDs:Indexable\n280\n1\n291\n1\n101\nACDSRECORD\n1\nAcDbDs::ID\n90\n4\n2\nAcDbDs::HandleAttribute\n280\n7\n282\n1\n0\nACDSSCHEMA\n90\n1\n1\nAcDbDs::TreatedAsObjectDataSchema\n2\nAcDbDs::TreatedAsObjectData\n280\n1\n91\n0\n0\nACDSSCHEMA\n90\n2\n1\nAcDbDs::LegacySchema\n2\nAcDbDs::Legacy\n280\n1\n91\n0\n0\nACDSSCHEMA\n90\n3\n1\nAcDbDs::IndexedPropertySchema\n2\nAcDs:Indexable\n280\n1\n91\n0\n0\nACDSSCHEMA\n90\n4\n1\nAcDbDs::HandleAttributeSchema\n2\nAcDbDs::HandleAttribute\n280\n7\n91\n1\n284\n1\n0\nACDSRECORD\n90\n0\n2\nAcDbDs::ID\n280\n10\n320\n22\n2\nThumbnail_Data\n280\n15\n94\n896\n310\n89504E470D0A1A0A0000000D49484452000001000000009108030000001BE1960600000300504C5445212830FFFFFF2128300000000000000000000000000000000000000000000000000000330000660000990000CC0000FF0033000033330033660033990033CC0033FF0066000066330066660066990066CC0066FF0099\n310\n000099330099660099990099CC0099FF00CC0000CC3300CC6600CC9900CCCC00CCFF00FF0000FF3300FF6600FF9900FFCC00FFFF3300003300333300663300993300CC3300FF3333003333333333663333993333CC3333FF3366003366333366663366993366CC3366FF3399003399333399663399993399CC3399FF33CC00\n310\n33CC3333CC6633CC9933CCCC33CCFF33FF0033FF3333FF6633FF9933FFCC33FFFF6600006600336600666600996600CC6600FF6633006633336633666633996633CC6633FF6666006666336666666666996666CC6666FF6699006699336699666699996699CC6699FF66CC0066CC3366CC6666CC9966CCCC66CCFF66FF0066\n310\nFF3366FF6666FF9966FFCC66FFFF9900009900339900669900999900CC9900FF9933009933339933669933999933CC9933FF9966009966339966669966999966CC9966FF9999009999339999669999999999CC9999FF99CC0099CC3399CC6699CC9999CCCC99CCFF99FF0099FF3399FF6699FF9999FFCC99FFFFCC0000CC00\n310\n33CC0066CC0099CC00CCCC00FFCC3300CC3333CC3366CC3399CC33CCCC33FFCC6600CC6633CC6666CC6699CC66CCCC66FFCC9900CC9933CC9966CC9999CC99CCCC99FFCCCC00CCCC33CCCC66CCCC99CCCCCCCCCCFFCCFF00CCFF33CCFF66CCFF99CCFFCCCCFFFFFF0000FF0033FF0066FF0099FF00CCFF00FFFF3300FF3333\n310\nFF3366FF3399FF33CCFF33FFFF6600FF6633FF6666FF6699FF66CCFF66FFFF9900FF9933FF9966FF9999FF99CCFF99FFFFCC00FFCC33FFCC66FFCC99FFCCCCFFCCFFFFFF00FFFF33FFFF66FFFF99FFFFCCFFFFFF0000000D0D0D1A1A1A2828283535354343435050505D5D5D6B6B6B787878868686939393A1A1A1AEAEAEBB\n310\nBBBBC9C9C9D6D6D6E4E4E4F1F1F1FFFFFF0000000000000000000000000000000000000000000000000000000000002E4550F10000003B4944415478DAEDC13101000000C2A0F54F6D0B2FA0000000000000000000000000000000000000000000000000000000000000000000000000CE06919100016C9A5B1B0000000049\n310\n454E44AE426082\n0\nENDSEC\n0\nEOF\n';
		
		return s;
	}
}

Basic.ACI = 
{
    LAYER:0,
    RED:1,
    YELLOW:2,
    GREEN:3,
    CYAN:4,
    BLUE:5,
    MAGENTA:6,
    WHITE:7 ,
	COLOR8:8,
	COLOR9:9,
	COLOR11:11,
	COLOR12:12,
	COLOR13:13,
	COLOR14:14,
	COLOR15:15,
	COLOR16:16,
	COLOR17:17,
	COLOR18:18,
	COLOR19:19,
	COLOR20:20,
	COLOR21:21,
	COLOR22:22,
	COLOR23:23,
	COLOR24:24,
	COLOR25:25,
	COLOR26:26,
	COLOR27:27,
	COLOR28:28,
	COLOR29:29,
	COLOR30:30,
	COLOR31:31,
	COLOR32:32,
	COLOR33:33,
	COLOR34:34,
	COLOR35:35,
	COLOR36:36,
	COLOR37:37,
	COLOR38:38,
	COLOR39:39,
	COLOR40:40,
	COLOR41:41,
	COLOR42:42,
	COLOR43:43,
	COLOR44:44,
	COLOR45:45,
	COLOR46:46,
	COLOR47:47,
	COLOR48:48,
	COLOR49:49,
	COLOR51:51,
	COLOR52:52,
	COLOR53:53,
	COLOR54:54,
	COLOR55:55,
	COLOR56:56,
	COLOR57:57,
	COLOR58:58,
	COLOR59:59,
	COLOR60:60,
	COLOR61:61,
	COLOR62:62,
	COLOR63:63,
	COLOR64:64,
	COLOR65:65,
	COLOR66:66,
	COLOR67:67,
	COLOR68:68,
	COLOR69:69,
	COLOR70:70,
	COLOR71:71,
	COLOR72:72,
	COLOR73:73,
	COLOR74:74,
	COLOR75:75,
	COLOR76:76,
	COLOR77:77,
	COLOR78:78,
	COLOR79:79,
	COLOR80:80,
	COLOR81:81,
	COLOR82:82,
	COLOR83:83,
	COLOR84:84,
	COLOR85:85,
	COLOR86:86,
	COLOR87:87,
	COLOR88:88,
	COLOR89:89,
	COLOR90:90,
	COLOR91:91,
	COLOR92:92,
	COLOR93:93,
	COLOR94:94,
	COLOR95:95,
	COLOR96:96,
	COLOR97:97,
	COLOR98:98,
	COLOR99:99,
	COLOR100:100,
	COLOR101:101,
	COLOR102:102,
	COLOR103:103,
	COLOR104:104,
	COLOR105:105,
	COLOR106:106,
	COLOR107:107,
	COLOR108:108,
	COLOR109:109,
	COLOR110:110,
	COLOR111:111,
	COLOR112:112,
	COLOR113:113,
	COLOR114:114,
	COLOR115:115,
	COLOR116:116,
	COLOR117:117,
	COLOR118:118,
	COLOR119:119,
	COLOR120:120,
	COLOR121:121,
	COLOR122:122,
	COLOR123:123,
	COLOR124:124,
	COLOR125:125,
	COLOR126:126,
	COLOR127:127,
	COLOR128:128,
	COLOR129:129,
	COLOR130:130,
	COLOR131:131,
	COLOR132:132,
	COLOR133:133,
	COLOR134:134,
	COLOR135:135,
	COLOR136:136,
	COLOR137:137,
	COLOR138:138,
	COLOR139:139,
	COLOR140:140,
	COLOR141:141,
	COLOR142:142,
	COLOR143:143,
	COLOR144:144,
	COLOR145:145,
	COLOR146:146,
	COLOR147:147,
	COLOR148:148,
	COLOR149:149,
	COLOR150:150,
	COLOR151:151,
	COLOR152:152,
	COLOR153:153,
	COLOR154:154,
	COLOR155:155,
	COLOR156:156,
	COLOR157:157,
	COLOR158:158,
	COLOR159:159,
	COLOR160:160,
	COLOR161:161,
	COLOR162:162,
	COLOR163:163,
	COLOR164:164,
	COLOR165:165,
	COLOR166:166,
	COLOR167:167,
	COLOR168:168,
	COLOR169:169,
	COLOR170:170,
	COLOR171:171,
	COLOR172:172,
	COLOR173:173,
	COLOR174:174,
	COLOR175:175,
	COLOR176:176,
	COLOR177:177,
	COLOR178:178,
	COLOR179:179,
	COLOR180:180,
	COLOR181:181,
	COLOR182:182,
	COLOR183:183,
	COLOR184:184,
	COLOR185:185,
	COLOR186:186,
	COLOR187:187,
	COLOR188:188,
	COLOR189:189,
	COLOR190:190,
	COLOR191:191,
	COLOR192:192,
	COLOR193:193,
	COLOR194:194,
	COLOR195:195,
	COLOR196:196,
	COLOR197:197,
	COLOR198:198,
	COLOR199:199,
	COLOR100:200,
	COLOR201:201,
	COLOR202:202,
	COLOR203:203,
	COLOR204:204,
	COLOR205:205,
	COLOR206:206,
	COLOR207:207,
	COLOR208:208,
	COLOR209:209,
	COLOR210:210,
	COLOR211:211,
	COLOR212:212,
	COLOR213:213,
	COLOR214:214,
	COLOR215:215,
	COLOR216:216,
	COLOR217:217,
	COLOR218:218,
	COLOR219:219,
	COLOR220:220,
	COLOR221:221,
	COLOR222:222,
	COLOR223:223,
	COLOR224:224,
	COLOR225:225,
	COLOR226:226,
	COLOR227:227,
	COLOR228:228,
	COLOR229:229,
	COLOR230:230,
	COLOR231:231,
	COLOR232:232,
	COLOR233:233,
	COLOR234:234,
	COLOR235:235,
	COLOR236:236,
	COLOR237:237,
	COLOR238:238,
	COLOR239:239,
	COLOR240:240,
	COLOR241:241,
	COLOR242:242,
	COLOR243:243,
	COLOR244:244,
	COLOR245:245,
	COLOR246:246,
	COLOR247:247,
	COLOR248:248,
	COLOR249:249,
	COLOR250:250,
	COLOR251:251,
	COLOR252:252,
	COLOR253:253,
	COLOR254:254,
	COLOR255:255
}

Basic.LAYERS = 
[
    {name:'0',colorNumber:Basic.ACI.WHITE}
]

module.exports = Basic;
},{"./Arc":1,"./Circle":2,"./Hatch":3,"./Image":4,"./ImageDef":5,"./Layer":6,"./Line":7,"./Polyline":8,"./Text":9}],1:[function(require,module,exports){
class Arc{
	
	constructor(x,y,r,startAn,endAn) {
	    this.x = x;
		this.y = y;
		this.r = r;
		this.startAn = startAn;
		this.endAn = endAn;
	}
	
	toDxfString(num,name){
		let s = "0\nARC\n";
		s += "5\n"+num+"\n";
		s += "330\n1F\n";
		s += "100\nAcDbEntity\n";
		s += "8\n"+name+"\n";
		s += "100\nAcDbCircle\n";
		s += "10\n"+this.x + "\n20\n" + this.y +"\n30\n0\n";
		s += "40\n"+ this.r + "\n100\nAcDbArc\n50\n"+this.startAn+"\n51\n"+this.endAn+"\n";
		return s;
	}
}

module.exports = Arc;
},{}],2:[function(require,module,exports){
class Circle{
	constructor(x,y,radius) {
		this.x = x;
		this.y = y;
		this.radius = radius;
	}
	
	toDxfString(num,name){
		
		let s = '0\nCIRCLE\n';
		s += '5\n'+num+'\n'
		s += '330\n1F\n';
		s += '100\nAcDbEntity\n';
		s += '8\n'+name+'\n';
		s += '100\nAcDbCircle\n';
	    s += '10\n'+this.x+'\n20\n'+this.y+'\n30\n0.0\n40\n'+this.radius+'\n';
	    return s;
	}
	
}

module.exports = Circle;
},{}],3:[function(require,module,exports){
class Hatch{
	
	constructor(points) {
	    
		this.points = points;
		this.pointsNum = points.length;
		
	}
	
	toDxfString(num,name){
	    
	    let s = '0\nHATCH\n';
	    s += '5\n'+num+'\n330\n1F\n100\nAcDbEntity\n'+'8\n'+name+'\n';
		s += "100\nAcDbHatch\n10\n0.0\n20\n0.0\n30\n0.0\n210\n0.0\n220\n0.0\n230\n1.0\n2\nSOLID\n70\n1\n71\n0\n91\n1\n92\n7\n72\n0\n73\n1\n";
		s += '93\n'+this.pointsNum+'\n';
		
	    for (let i = 0; i < this.pointsNum; i++){
			console.log(this.points);
			console.log(this.points[i][0],this.points[i][1]);
	        s += '10\n'+this.points[i][0]+'\n20\n'+this.points[i][1]+'\n';
	    }
		
		s += '97\n1\n330\n0\n75\n1\n76\n1\n47\n2.680470542950764\n98\n1\n10\n3453.190575686195\n20\n1802.787515878135\n450\n0\n451\n0\n460\n0.0\n461\n0.0\n452\n0\n462\n0.0\n453\n2\n463\n0.0\n63\n3\n421\n255\n463\n1.0\n63\n2\n421\n16776960\n470\nLINEAR\n';
		
	    return s;
	}
}

module.exports = Hatch;
},{}],4:[function(require,module,exports){
class Image{
	constructor(x,y,width,height,name){
	    this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.name = name;
		/* this.imgDef = imgDef; */
	}
	
	toDxfString(num,layerName,imgDefNum){
		let s = '0\nIMAGE\n5\n';
		s += num + '\n';
		s += "330\n1F\n100\nAcDbEntity\n8\n";
		s += layerName + '\n100\nAcDbRasterImage\n';
		s += "10\n" + this.x + "\n20\n" + this.y + "\n30\n0.0\n";
		s += "11\n1.0\n21\n0.0\n31\n0.0\n12\n0.0\n22\n1.0\n32\n0.0\n";
		s += "13\n"+this.width+"\n";
		s += "23\n"+this.height+"\n";
		s += "340\n"+imgDefNum+"\n";
		s += "71\n1\n91\n2\n14\n0\n24\n0\n";
		s += "14\n"+this.width+"\n24\n"+this.height+"\n";
		return s;
	}
}

module.exports = Image;
},{}],5:[function(require,module,exports){
class ImageDef{
	
	constructor(width,height,fileName){
		this.width = width;
		this.height = height;
		this.fileName = fileName;
		this.codeFive = null;
	}
	
	imageToDxfString(){
		let s = "0\nIMAGEDEF\n5\n";
		s += this.codeFive+"\n";
		s += "330\n28A\n";
		s += "100\nAcDbRasterImageDef\n";
		s += "1\n"+ ".\\img\\"+this.fileName+"\n";
		s += "10\n"+ this.width +"\n20\n"+this.height+"\n";
		s += "280\n1\n281\n0\n";
		return s;
	}
}
module.exports = ImageDef;

},{}],6:[function(require,module,exports){
class Layer{
	
	constructor(name, colorNumber){
	    this.name = name;
	    this.colorNumber = colorNumber;
	    this.shapes = [];
	}
	
	toDxfString(num){
	    let s = '0\nLAYER\n';
		s += '5\n'+num+"\n";
		s += "330\n2\n100\nAcDbSymbolTableRecord\n100\nAcDbLayerTableRecord\n";
		s += "2\n"+this.name+"\n"
		s += "70\n0\n62\n"+this.colorNumber+"\n6\nContinuous\n370\n-3\n390\nF\n347\nEE\n348\n0\n";
	    return s;        
	}
	
	/**
	 * add shape to basic
	 * @shape {object} shape - draw shape
	 */
	addShape(shape){
		this.shapes.push(shape);
		return this;
	}
	
	getShapes(){
	    return this.shapes;
	}
	
	shapeToString(layerNum,imageDefArray){
		let s = "";
		
		for(let i=0;i<this.shapes.length;i++){
			let firstLine5 = (648*layerNum+25*i).toString(16);
			if(this.shapes[i].__proto__.constructor.name=="Image"){//图片
				//console.log("我是图片");
				//console.log(imageDefArray);
				for(let j=0;j<imageDefArray.length;j++){
					//console.log("数组名字",imageDefArray[j].fileName);
					//console.log("image名字",this.shapes[i].name);
					if(imageDefArray[j].fileName==this.shapes[i].name){
						//console.log("我们都一样，都一样");
						s += this.shapes[i].toDxfString(firstLine5,this.name,imageDefArray[j].codeFive);
					}
				}
			}
			else{
				s += this.shapes[i].toDxfString(firstLine5,this.name);
			}
		} 
		 
		return s;
	}
	
}
module.exports = Layer;
},{}],7:[function(require,module,exports){
class Line{
	constructor(x1,y1,x2,y2) {
		this.x1 = x1;
		this.y1 = y1;
		this.x2 = x2;
		this.y2 = y2;
	}
	
	toDxfString(num,name){
		//https://www.autodesk.com/techpubs/autocad/acadr14/dxf/line_al_u05_c.htm
		let s = '0\nLINE\n';
		s += '5\n'+num+'\n'
		s += '330\n1F\n';
		s += '100\nAcDbEntity\n';
		s += '8\n'+name+'\n';
		s += '100\nAcDbLine\n';
        //s += `8\n${this.layer.name}\n`;
        s += '10\n'+this.x1+'\n20\n'+this.y1+'\n30\n0.0\n';
        s += '11\n'+this.x2+'\n21\n'+this.y2+'\n31\n0.0\n';
        return s;
	}
}

module.exports = Line;
},{}],8:[function(require,module,exports){
class Polyline{
	/**
	 * @param [array] points - Array of points like [ [x1, y1], [x2, y2]... ]
	 */
	constructor(points) {
	    this.points = points;
		this.pointNum = this.points.length;
	}
	
	toDxfString(num,name)
	{
	    //https://www.autodesk.com/techpubs/autocad/acad2000/dxf/polyline_dxf_06.htm
	    let s = '0\nLWPOLYLINE\n';
	    s += '5\n'+num+'\n330\n1F\n100\nAcDbEntity\n'+'8\n'+name+'\n';
		s += '100\nAcDbPolyline\n';
		s += '90\n'+this.pointNum+'\n';
		s += '70\n0\n43\n0.0\n';
		
	    for (let i = 0; i < this.points.length; i++)
	    {
	        s += '10\n'+this.points[i][0]+'\n20\n'+this.points[i][1]+'\n';
	    }
	   
	    return s;
	}
}

module.exports = Polyline;
},{}],9:[function(require,module,exports){
class Text{
	constructor(x,y,lineheight,content,angle) {
		this.x= x;
		this.y = y;
		this.lineheight = lineheight;
		this.content = content;
		this.angle = angle;
	}
	
	toDxfString(num,name){
		
		let s = '0\nTEXT\n';
		s += '5\n'+num+'\n'
		s += '330\n1F\n';
		s += '100\nAcDbEntity\n';
		s += '8\n'+name+'\n';
		s += '100\nAcDbText\n';
        //s += `8\n${this.layer.name}\n`;
        s += '10\n'+this.x+'\n20\n'+this.y+'\n30\n0.0\n';
		s += '40\n'+this.lineheight + '\n1\n'+ this.content+'\n';
		s += '50\n'+this.angle+'\n100\nAcDbText\n';
        return s;
	}
}

module.exports = Text;
},{}]},{},[]);
