'use client'
import React, { useState } from 'react'
import styles from './textarea.module.css'
const Textarea = () => {
  const [text, setText] = useState('')
  const count  = text.length
  
  return (
    <div>
      <textarea onChange={e=>setText(e.target.value)} name="" id="" cols="30" maxLength={75}  className={styles.textarea}></textarea>
      <p style={{fontSize: 10}}>{count} of 75 max characters</p>
    </div>
  )
}

export default Textarea