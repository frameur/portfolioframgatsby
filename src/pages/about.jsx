import React from "react"
import Layout from "../components/Layout"
// import Video from "../components/video"

export default function About() {
  return (
    <Layout>
      <div>
        <h2 style={{ textAlign: "center", margin: "20px" }}>
          Au sujet des logiciels
        </h2>
        <p>
          <h4>SKETCHBOOK</h4> Sketchbook (anciennement StudioPaint, Autodesk
          SketchBook), est une application logicielle graphique raster destinée
          au dessin expressif et à l’esquisse de concept également pour la
          réalisation d’animations (Jelly Boo, Teatralka). Le logiciel a d’abord
          été développé par Alias Systems Corporation sous le nom de
          StudioPaint, avant d’être acquis par Autodesk, puis d’être transformé
          en une société indépendante, Sketchbook, Inc. Développé à l’origine en
          tant que logiciel commercial, il a évolué vers un modèle d’abonnement
          avant d’être finalement transformé en logiciel gratuit pour un usage
          personnel.
        </p>
        <h4>PHOTOSHOP</h4>
        <p>
          Photoshop est un logiciel de retouche, de traitement et de dessin
          assisté par ordinateur, lancé en 1990 sur MacOS puis en 1992 sur
          Windows. Édité par Adobe, il est principalement utilisé pour le
          traitement des photographies numériques, mais sert également à la
          création ex nihilo d’images. Il travaille essentiellement sur images
          matricielles car les images sont constituées d’une grille de points
          appelés pixels. L’intérêt de ces images est de reproduire des
          gradations subtiles de couleurs.
        </p>
      </div>

      {/* <Video /> */}
    </Layout>
  )
}
