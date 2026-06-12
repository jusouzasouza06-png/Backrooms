import * as THREE from 'https://unpkg.com/three@0.165.0/build/three.module.js';

export function createMap(scene) {

    const floor = new THREE.Mesh(
        new THREE.PlaneGeometry(200, 200),
        new THREE.MeshLambertMaterial({color: 0xd8d27a})
    );

    floor.rotation.x = -Math.PI / 2;
    scene.add(floor);

    for(let i=-50;i<50;i+=10){

        const wall = new THREE.Mesh(
            new THREE.BoxGeometry(1,5,10),
            new THREE.MeshLambertMaterial({color:0xffff99})
        );

        wall.position.set(i,2.5,-20);
        scene.add(wall);
    }
}