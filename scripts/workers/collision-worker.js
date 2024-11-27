/**
 * The global space of a worker is the 'self' object.
 */
let _bounce         = -1.0;

let _canvas         = new Aspect;

let _balls          = undefined;

let _numBalls       = undefined;


/**
 * The main script sends two messages to the worker for initialization. The first is a
 * an object containing the width and height of the canvas element since web workers
 * cannot access the DOM. The second is a copy of the _balls array that we'll use to
 * calculate collision detection here before sending a copy of that back to the main
 * script to render.
 * Once the balls array is initialized, we kick off the processing loop.
 */
self.addEventListener ( 'message', function ( event )
{
    if ( Array.isArray ( event.data ) )
    {
        _balls    = event.data;                // COPY OF THE BALLS ARRAY FROM THE MAIN SCRIPT

        _numBalls = _balls.length;


        self.setInterval ( _processFrame, 1000 / 30 /** 30 fps **/ );
    }
    else
    {
        _canvas.width  = event.data.width;

        _canvas.height = event.data.height;
    }
} );

/**
 * Moves each ball; when finished sends an message to the main script with a
 * copy of this _balls array containing the updated positions.
 * The collision detection loop is running at 30 fps while the render loop is
 * running at 60 fps, so it's up to the main script to coordinate.
 */
function _processFrame ( )
{
    _balls.forEach ( _move );                 // THESE ITERATIONS WERE IN THE DRAWFRAME FUNCTION


    for ( let _ballA, _i = 0, _len = _numBalls - 1; _i < _len; _i++ )
    {
        _ballA = _balls [ _i ];


        for ( let _ballB, _j = _i + 1; _j < _numBalls; _j++ )
        {
            _ballB = _balls [ _j ];


            _checkCollision ( _ballA, _ballB );
        }
    }


    self.postMessage ( _balls );             // CALCULATIONS DONE, SEND UPDATED VALUES BACK TO THE MAIN SCRIPT
}

/**
 * Same collision detection code from chapter 11, exercise 06-multi-billiard-2.html ...
 */
function _rotate ( x, y, sin, cos, reverse )
{
    return {
               x: ( reverse ) ? ( x * cos + y * sin ) : ( x * cos - y * sin ),
               y: ( reverse ) ? ( y * cos - x * sin ) : ( y * cos + x * sin )
           };
}

function _checkCollision ( ballA, ballB )
{
    let _distance = new Point;


        _distance.x = ballB.x - ballA.x;

        _distance.y = ballB.y - ballA.y;


        _distance.total = Math.sqrt ( _distance.x * _distance.x + _distance.y * _distance.y );


    // COLLISION HANDLING CODE HERE
    if ( _distance.total < ballA.radius + ballB.radius )
    {
        // CALCULATE ANGLE, SINE, AND COSINE
        let _angle = Math.atan2 ( _distance.y, _distance.x );

        let _sin   = Math.sin ( _angle );

        let _cos   = Math.cos ( _angle );


        // ROTATE BALL0'S POSITION
        let _positionA = new Point;


        // ROTATE BALL1'S POSITION
        let _positionB = _rotate ( _distance.x, _distance.y, _sin, _cos, true );


        // ROTATE BALL0'S VELOCITY
        let _velocityA = _rotate ( ballA.velocity.x, ballA.velocity.y, _sin, _cos, true );


        // ROTATE BALL1'S VELOCITY
        let _velocityB = _rotate ( ballB.velocity.x, ballB.velocity.y, _sin, _cos, true );


        // COLLISION REACTION
        let _vxTotal = _velocityA.x - _velocityB.x;

            _velocityA.x = ( ( ballA.mass - ballB.mass ) * _velocityA.x + 2 * ballB.mass * _velocityB.x ) / ( ballA.mass + ballB.mass );

            _velocityB.x = vxTotal + _velocityA.x;


        // UPDATE POSITION - TO AVOID OBJECTS BECOMING STUCK TOGETHER
        let _absVelocity = Math.abs ( _velocityA.x ) + Math.abs ( _velocityB.x );

        let _overlap     = ( ballA.radius + ballB.radius ) - Math.abs ( pos0.x - pos1.x );


            _positionA.x += _velocityA.x / _absVelocity * _overlap;

            _positionB.x += _velocityB.x / _absVelocity * _overlap;


        // ROTATE POSITIONS BACK
        let _positionAFinal = _rotate ( pos0.x, pos0.y, _sin, _cos, false );

        let _positionBFinal = _rotate ( pos1.x, pos1.y, _sin, _cos, false );


        // ADJUST POSITIONS TO ACTUAL SCREEN POSITIONS
        ballB.x = ballA.x + _positionBFinal.x;

        ballB.y = ballA.y + _positionBFinal.y;


        ballA.x = ballA.x + _positionAFinal.x;

        ballA.y = ballA.y + _positionAFinal.y;


        // ROTATE VELOCITIES BACK
        let _velocityAF = _rotate ( _velocityA.x, _velocityA.y, _sin, _cos, false );

        let _velocityBF = _rotate ( _velocityB.x, _velocityB.y, _sin, _cos, false );


        ballA.velocity.x = _velocityAF.x;

        ballA.velocity.y = _velocityAF.y;


        ballB.velocity.x = _velocityBF.x;

        ballB.velocity.y = _velocityBF.y;
    }
}

function _checkWalls ( ball )
{
    if ( ball.x + ball.radius > _canvas.width )
    {
        ball.x           = _canvas.width - ball.radius;

        ball.velocity.x *= bounce;
    }


    if ( ball.x - ball.radius < 0 )
    {
        ball.x           = ball.radius;

        ball.velocity.x *= bounce;
    }


    if ( ball.y + ball.radius > _canvas.height )
    {
        ball.y           = _canvas.height - ball.radius;

        ball.velocity.y *= bounce;
    }


    if ( ball.y - ball.radius < 0 )
    {
        ball.y           = ball.radius;

        ball.velocity.y *= bounce;
    }
}

function _move ( ball )
{
    ball.x += ball.velocity.x;

    ball.y += ball.velocity.y;


    _checkWalls ( ball );
}
}
