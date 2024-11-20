/**
 * @class           {Object}            Ship                    Ship object
 * @property        {Point}             point                   X & Y axis coordinates
 * @property        {Aspect}            aspect                  Aspect properties
 * @property        {Stroke}            stroke                  Stroke properties
 * @property        {Fill}              fill                    Fill properties
 * @property        {Shadow}            shadow                  Shadow properties
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 * @property        {boolean}           flame                   Flame boolean toggle
 * @property        {Options}           options                 Options for this object
 * @property        {Position}          position                Position properties
 * @property        {Point}             velocity                X & Y velocity coordinates
 */
class Ship
{
    _point  = new Point;
    _aspect = new Aspect;
    _stroke = new Stroke;
    _fill   = new Fill;
    _shadow = new Shadow;

    _canvas = undefined;

    #flame    = false;
    #options  = new Options;
    #position = new Position;
    #velocity = new Point;

    /**
     * Create a Ship object
     * @property        {Point}             point                   X & Y axis coordinates
     * @property        {number|Point}      radius                  Radius of circle
     * @property        {Angle}             angle                   Angle properties
     * @property        {Stroke}            stroke                  Stroke properties
     * @property        {Fill}              fill                    Fill properties
     * @property        {Shadow}            shadow                  Shadow properties
     * @property        {HTMLCanvasElement} canvas                  Canvas Id
     */
    constructor (
                    point  = { x:     undefined, y:      undefined },
                    aspect = { width: undefined, height: undefined },
                    stroke = { color: undefined, type:   undefined, segments:    undefined, width: undefined },
                    fill   = { color: undefined, type:   undefined },
                    shadow = { color: undefined, blur:   undefined, offset: { x: undefined, y:     undefined } },
                    canvas = undefined
                )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isAspect = VALIDATION.isAspect;
            this._isDegree = VALIDATION.isDegree;
            this._isFill   = VALIDATION.isFill;
            this._isInDom  = VALIDATION.isInDom;
            this._isPoint  = VALIDATION.isPoint;
            this._isStroke = VALIDATION.isStroke;

            this._setFillType = UTILITIES.individual.set.fillType;
            this._setShadow   = UTILITIES.individual.set.shadow;

            Object.defineProperty ( this, 'canvas', PROPERTY_BLOCKS.individual.canvas );
            Object.defineProperty ( this, 'point',  PROPERTY_BLOCKS.individual.point  );
            Object.defineProperty ( this, 'x',      PROPERTY_BLOCKS.individual.pointX );
            Object.defineProperty ( this, 'y',      PROPERTY_BLOCKS.individual.pointY );

            delete this.#options._controlPoints;
            delete this.#options._points;
            delete this.#options._master;

        this.point  = point;

        this.width  = ( aspect.width  != undefined ) ? aspect.width  : 25;
        this.height = ( aspect.height != undefined ) ? aspect.height : 20;

        ////    OBJECT INITIALIZER(S)   ////////////////////

            this._stroke = new Stroke ( stroke.color, stroke.type, stroke.segments, stroke.width );

            this._fill   = new Fill   ( fill.color,   fill.type );

            this._shadow = new Shadow ( shadow.color, shadow.blur, { x: shadow.offset.x, y: shadow.offset.y } );

        this.canvas = canvas;

        ////    ANCILLARY   ////////////////////////////////

            this.#options.shadow  = ( shadow.offset.x != undefined && shadow.offset.y != undefined );

            this.#position.master = this;
    }

    ////    PROPERTIES    //////////////////////////////////

        ////    [ POINT ]   //////////////////////////

            /**
             * Set point
             * @public
             * @function
             * @param           {Point} value                               X & Y coordinates
             * @see             {@link PROPERTY_BLOCKS.individual.point}
             */
            set point ( value ) { }

            /**
             * Get point
             * @public
             * @function
             * @return          {Point}                                     X & Y coordinates
             * @see             {@link PROPERTY_BLOCKS.individual.point}
             */
            get point ( ) { }


            /**
             * Set x-axis value
             * @public
             * @function
             * @param           {number} value                              X coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointX}
             */
            set x ( value ) { }

            /**
             * Get x-axis value
             * @readOnly
             * @function
             * @return          {number}                                    X coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointX}
             */
            get x ( ) { }


            /**
             * Set y-axis value
             * @public
             * @function
             * @param           {number} value                              Y coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointY}
             */
            set y ( value ) { }

            /**
             * Get y-axis value
             * @readOnly
             * @function
             * @return          {number}                                    Y coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointY}
             */
            get y ( ) { }

        ////    [ STROKE ]    ////////////////////////

            /**
             * Set stroke properties
             * @public
             * @function
             * @param             {Stroke} value                            Stroke properties
             */
            set stroke ( value )
            {
                this._stroke = ( this._isStroke ( value ) ) ? value : this._stroke;
            }

            /**
             * Get stroke properties
             * @public
             * @function
             * @return          {Stroke}                                    Stroke properties
             */
            get stroke ( )
            {
                return this._stroke;
            }

        ////    [ FILL ]    //////////////////////////

            /**
             * Set fill properties
             * @public
             * @function
             * @param             {Fill} value                              Fill properties
             */
            set fill ( value )
            {
                this._fill = (this._isFill ( value ) ) ? value : this._fill;
            }

            /**
             * Get fill properties
             * @public
             * @function
             * @return          {Fill}                                      Fill properties
             */
            get fill ( )
            {
                return this._fill;
            }

        ////    [ SHADOW ]    ////////////////////////

            /**
             * Get shadow properties
             * @public
             * @function
             * @return          {Shadow}                                    Shadow properties
             */
            get shadow ( )
            {
                return this._shadow;
            }

        ////    [ CANVAS ]    ////////////////////////

            /**
             * Set canvas value
             * @public
             * @function
             * @param           {string} value                              Canvas id
             * @see             {@link individual.canvas}
             */
            set canvas ( value ) { }

            /**
             * Get canvas value
             * @readOnly
             * @function
             * @return          {string}                                    Canvas id
             * @see             {@link individual.canvas}
             */
            get canvas ( ) { }

        ////    [ FLAME ]    /////////////////////////

            /**
             * Set flame
             * @public
             * @function
             * @param             {boolean} value                               True || False
             */
            set flame ( value )
            {
                this.#flame = value;
            }

            /**
             * Get flame
             * @public
             * @function
             * @return             {boolean}                                    True || False
             */
            get flame ( )
            {
                return this.#flame;
            }

        ////    [ OPTIONS ]    ///////////////////////

            /**
             * Get options properties
             * @public
             * @function
             * @return          {Options}                                   Options properties
             */
            get options ( )
            {
                return this.#options;
            }

        ////    [ POSITION ]    //////////////////////

            /**
             * Get position properties
             * @public
             * @function
             * @return          {Position}                                  Position properties
             */
            get position ( )
            {
                return this.#position;
            }

        ////    [ VELOCITY ]    //////////////////////

            /**
             * Set velocity
             * @public
             * @function
             * @param             {number} value                                Velocity of object
             */
            set velocity ( value )
            {
                this.#velocity = value;
            }

            /**
             * Get velocity
             * @public
             * @function
             * @return             {number}                                     Velocity of object
             */
            get velocity ( )
            {
                return this.#velocity;
            }

    ////    VALIDATION  ////////////////////////////////////

        ////    - PRIVATE    /////////////////////

            /**
             * Returns whether the passed value is an Aspect
             * @private
             * @function
             * @param           {Object} value                              Aspect or object equivalent
             * @return          {boolean}                                   True || False
             * @see             {@link VALIDATION.isAspect}
             */
            _isAspect ( ) { }

            /**
             * Returns whether the passed value is a Fill property object
             * @private
             * @function
             * @param           {Object} value                              Fill
             * @return          {boolean}                                   True || False
             * @see             {@link VALIDATION.isFill}
             */
            _isFill ( ) { }

            /**
             * Returns whether the passed value is an element id within the DOM
             * @private
             * @function
             * @param           {string} value                              Element id
             * @return          {boolean}                                   True || False
             * @see             {@link VALIDATION.isInDom}
             */
            _isInDom ( ) { }

            /**
             * Returns whether the passed value is a Number value
             * @private
             * @function
             * @param           {number} value                              Number value
             * @return          {boolean}                                   True || False
             * @see             {@link VALIDATION.isNumber}
             */
            _isNumber ( ) { }

            /**
             * Returns whether the passed value is a Point
             * @private
             * @function
             * @param           {Object} value                              Point or object equivalent
             * @return          {boolean}                                   True || False
             * @see             {@link VALIDATION.isPoint}
             */
            _isPoint ( ) { }

            /**
             * Returns whether the passed value is a Stroke property object
             * @private
             * @function
             * @param           {Object} value                              Stroke
             * @return          {boolean}                                   True || False
             * @see             {@link VALIDATION.isStroke}
             */
            _isStroke ( ) { }

        ////    + PUBLIC    //////////////////////

            /**
             * Check whether the passed object is already present
             * @public
             * @function
             * @param           {Ship} ship                                 Object to validate
             * @return          {boolean}                                   True || False
             */
            isThere ( ship )
            {
                if ( ship instanceof this.constructor )

                    return (
                               ( this.point.x == ship.point.x ) &&

                               ( this.point.y == ship.point.y ) &&

                               ( this.aspect  == ship.aspect  )

                           ) ? true : false;

                else

                    console.warn ( `"${ship.constructor.name}" is not of type ${this.constructor.name}` );
            }

    ////    UTILITIES   ////////////////////////////////////

        ////    - PRIVATE    /////////////////////

            /**
             * Sets fill type of the associated object
             * @private
             * @function
             * @see             {@link UTILITIES.individual.set.fillType}
             */
            _setFillType ( ) { }

            /**
             * Sets shadow properties
             * @private
             * @function
             * @see             {@link UTILITIES.individual.set.shadow}
             */
            _setShadow ( ) { }

    ////    DRAW    ////////////////////////////////////////

        /**
         * Draw this object
         * @public
         * @function
         * @param           {string} canvas                             Canvas Id
         */
        draw ( canvas )
        {
            if ( canvas != undefined ) this.canvas = canvas;


            if ( this._canvas instanceof CanvasRenderingContext2D )
            {
                this._canvas.save ( );

                this._canvas.translate ( this.x, this.y );

                this._canvas.rotate ( this.position.rotation );


                if ( this.#options.shadow ) this._setShadow ( );                                    // Set: shadow


                this._canvas.strokeStyle = this.stroke.color.toCss ( );

                this._setFillType ( );

                this._canvas.lineWidth   = this.stroke.width;

                ////////////////////////////////////////////////////////////////

                this._canvas.setLineDash ( ( this.stroke.type === 'solid' ) ? new Array : this.stroke.segments );

                this._canvas.beginPath ( );


                this._canvas.moveTo ( 10, 0 );

                this._canvas.lineTo ( -10, 10 );

                this._canvas.lineTo ( -5, 0 );

                this._canvas.lineTo ( -10, -10 );

                this._canvas.lineTo ( 10, 0 );

                this._canvas.stroke (  );


                if ( this.flame )
                {
                    this._canvas.beginPath ( );

                    this._canvas.moveTo ( -7.5, -5 );

                    this._canvas.lineTo ( -15, 0 );

                    this._canvas.lineTo ( -7.5, 5 );

                    this._canvas.stroke ( );
                }

                this._canvas.stroke ( );


                if ( this.fill.type != 'pattern' )

                    this._canvas.fill ( );


                if ( this.#options.shadow ) this._canvas.shadowColor = new Rgb ( 0, 0, 0, 0 ).toCss ( );         // Reset: shadow


                this._canvas.restore ( );
            }
            else

                console.warn ( `'canvas' property is not set for ${this.constructor.name} !` );
        }
}
