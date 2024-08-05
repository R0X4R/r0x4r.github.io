export const vertex = `
varying vec2 vUv; // Passes the UV coordinates from the vertex to the fragment shader
uniform vec2 uDelta; // A uniform vector to control the displacement
uniform float uAmplitude; // A uniform float to control the amplitude of the displacement

// Define a constant value for PI
float PI = 3.141592653589793238;

void main() {
    vUv = uv; // Assign the UV coordinates to the varying variable

    // Create a new vector for the modified position
    vec3 newPosition = position;

    // Apply sine wave displacement based on the UV coordinates and uniform values
    newPosition.x += sin(uv.y * PI) * uDelta.x * uAmplitude;
    newPosition.y += sin(uv.x * PI) * uDelta.y * uAmplitude;

    // Compute the final position of the vertex
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
`

export const fragment = `
varying vec2 vUv; // Receives the UV coordinates from the vertex shader
uniform sampler2D uTexture; // A uniform sampler for the texture
uniform float uAlpha; // A uniform float to control the alpha (transparency)

void main() {
    // Sample the texture at the given UV coordinates
    vec3 texture = texture2D(uTexture, vUv).rgb;

    // Set the fragment color with the sampled texture color and alpha value
    gl_FragColor = vec4(texture, uAlpha);

    // Uncomment the following line to output a solid red color (for debugging)
    // gl_FragColor = vec4(1., 0., 0., 1.);
}
`
