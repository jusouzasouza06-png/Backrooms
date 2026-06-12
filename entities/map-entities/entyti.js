import * as THREE from 'https://unpkg.com/three@0.165.0/build/three.module.js';

export class Entity {

    constructor(scene){

        this.mesh = new THREE.Mesh(
            new THREE.BoxGeometry(1,2,1),
            new THREE.MeshLambertMaterial({color:0x000000})
        );

        this.mesh.position.set(10,1,10);
        scene.add(this.mesh);
    }

    update(player){

        this.mesh.position.x +=
            (player.position.x - this.mesh.position.x) * 0.002;

        this.mesh.position.z +=
            (player.position.z - this.mesh.position.z) * 0.002;
    }
}