'use client'

import Head from 'next/head'
import * as OBC from 'openbim-components'
import * as THREE from 'three'

export default function Demo() {

    const viewer = new OBC.Components()
    const sceneComponent = new OBC.SimpleScene(viewer)
    viewer.scene = sceneComponent
    const scene = sceneComponent.get()
    const ambientLight = new THREE.AmbientLight(0xE6E7E4, 1)
    const directionalLight = new THREE.DirectionalLight(0xF9F9F9, 0.75)
    directionalLight.position.set(10, 50, 10)
    scene.add(ambientLight, directionalLight)
    scene.background = new THREE.Color('#202932')

    return (
        <html lang="en">
            <Head>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            </Head>
            <body></body>
        </html>
    )
}