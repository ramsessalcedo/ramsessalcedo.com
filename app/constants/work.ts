import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2018',
    title: 'Georgia State',
    subtitle: 'Software Engineer',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2018',
    title: 'xHosts',
    subtitle: 'Member of Technical Staff',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2019',
    title: 'JSL',
    subtitle: 'Head of IT',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '2021',
    title: 'Skylabs',
    subtitle: 'Software Engineer',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: new Date().toLocaleDateString('default', { year: 'numeric' }),
    title: '?',
    subtitle: '???',
    position: 'right',
  }
]